import Api from "./api.js";

export const init = async() => {
  const api = new Api();
  const user = await api.createUser();
  return user;
};

export const getID = () =>{
let name = document.createElement('div');
//let user = await init();
name.innerText = "hello";
return name;
}
