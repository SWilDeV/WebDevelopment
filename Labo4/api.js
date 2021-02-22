export default class Api {
  constructor() {
    this.baseURL = "https://glo3102lab4.herokuapp.com";
  }

  registerUser = (user) => {
    this.user = user;
  };

  createUser = async () => {
    const response = await fetch(`${this.baseURL}/users`, {
      method: "post",
    });
    return response.json();
  };

  getTask = async () => {
    const response = await fetch(`${this.baseURL}/${this.user.id}/tasks`, {
      method: "GET"
    });
    const responseJSON = await response.json();
    return responseJSON.tasks;
  };

  createTask = async(TaskName)=>{
    const response = await fetch(`${this.baseURL}/${this.user.id}/tasks`, {
      method: "POST",
      headers:{
        'Content-type': 'application/json'
      },
      body:
        JSON.stringify({
          name:TaskName
        })
    });    
    return response.json();
  }

  updateTask = async(idTask, newTask) =>{
    const response = await fetch(`${this.baseURL}/${this.user.id}/tasks/${idTask}`, {
      method: "PUT",
      headers:{
        'Content-type': 'application/json'
      },
      body:
        JSON.stringify({
          name:newTask
        })
    });    
    return response.json();
  }

  deleteTask = async(idTask) =>{
    const response = await fetch(`${this.baseURL}/${this.user.id}/tasks/${idTask}`, {
      method: "DELETE"
    });    
  }
}
