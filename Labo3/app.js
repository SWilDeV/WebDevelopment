import Toast from "./toast.js";

//creer une instance de notre toaster
const toaster = new Toast();

const buttons = document.querySelectorAll(".toast-button");
const toastInput = document.querySelector("#toast-input");

buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    if (toastInput.value === "") {
      return;
    }
    const type = button.dataset.type;
    toaster[type](toastInput.value);
  });
});
