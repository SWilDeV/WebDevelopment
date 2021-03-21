import Api from "./api.js";

const api = new Api();
let tasksList = [];

const taskContainer = document.querySelector("#taskContainer");

//----------------------------------RENDER------------------------------------------
const renderTasks = () => {
  taskContainer.innerHTML = "";

  tasksList.forEach((task) => {
    //---------Creer elements html--------------
    const divElement = document.createElement("div");
    divElement.className = "task-item";

    const newInput = document.createElement("input");
    newInput.classList.add("inputSelector");
    newInput.value = task.name;

    divElement.appendChild(newInput);

    taskContainer.appendChild(divElement); //Ajouter au container

    //---------DELETE--------------
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("DeleteBtn");
    deleteBtn.type = "button";
    deleteBtn.innerText = "X";

    deleteBtn.onclick = async () => {
      await api.deleteTask(task.id);
      tasksList = tasksList.filter((i) => i.id !== task.id);
      renderTasks();
    };

    //---------UPDATE--------------
    const updateBtn = document.createElement("button");
    updateBtn.classList.add("updateBtn");
    updateBtn.type = "button";
    updateBtn.innerText = "Save";

    updateBtn.onclick = async () => {
      const UpdateTask = await api.updateTask(task.id, newInput.value);
      const index = tasksList.findIndex((i) => i.id === task.id);
      tasksList[index] = UpdateTask;
      renderTasks();
      updateBtn.classList.remove("show");
    };

    divElement.appendChild(updateBtn); //Ajouter bouton Update
    divElement.appendChild(deleteBtn); //Ajouter bouton delete

    //---------EXTRA STYLE--------------
    let InputSelector = document.querySelectorAll(".inputSelector");
    let UpdateBtnSelector = document.querySelectorAll(".updateBtn");

    InputSelector.forEach((inp, i) => {
      inp.onclick = () => {
        UpdateBtnSelector[i].classList.add("show");
      };
    });

  });
};

//----------------------------------INIT------------------------------------------
export const init = async () => {
  let user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    user = await api.createUser();
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
  }

  api.registerUser(user);
  const tasks = await api.getTask();
  tasks.forEach((task) => {
    tasksList.push(task);
  });
  renderTasks();

  const newTaskBtn = document.querySelector("#create_Btn");
  newTaskBtn.onclick = async () => {
    const Input = document.querySelector("#task-name");
    const TaskValue = Input.value;
    if (TaskValue === "") {
      return;
    }
    const newTask = await api.createTask(TaskValue);
    tasksList.push(newTask);
    Input.value = "";
    renderTasks();
  };
};

init();
