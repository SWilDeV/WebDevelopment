export default class Api {
  constructor() {
    this.baseURL = "https://glo3102lab4.herokuapp.com";
  }

  createUser = async () => {
    //POST /users
    const response = await fetch(`${this.baseURL}/users`, {
      method: "post"
    });
    return response.json();
  };
}
