const TOAST_TYPES = {
  ERROR: "ERROR",
  INFO: "INFO",
  SUCCESS: "SUCCESS",
};

const TOAST_DISMISS_TIME = 4000;
const TOAST_ANIMATION_TIME = 1000;

export default class Toast {
  constructor() {
    //Creer un contenant pour nos notifs / toast

    const container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);

    this.container = container;
  }

  //Creer des methodes pour chacun des types de notifs
  info(text) {
    this.toast(text, TOAST_TYPES.INFO);
  }
  error(text) {
    this.toast(text, TOAST_TYPES.ERROR);
  }
  success(text) {
    this.toast(text, TOAST_TYPES.SUCCESS);
  }
  toast(text, type) {
    // Creer un div pour la notif
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = text;

    this.container.appendChild(toast);

    const closeNotif = () => {
      toast.classList.add("closing");

      setTimeout(() => {
        toast.remove();
      }, TOAST_ANIMATION_TIME);
    };

    toast.addEventListener("click", () => {
      closeNotif();
    });

    setTimeout(() => {
      closeNotif();
    }, TOAST_DISMISS_TIME);
  }
}
