const uuidv4 = require("uuid").v4;

const users = [];
const createUser = () => {
  //creer utilisateur
  const user = {
    id: uuidv4(),
  };
  users.push(user);
  //retourner a la fonction parent
  return user;
};

const findById = (id) => {
  return users.find((user) => user.id === id);
};

exports.default = {
  createUser,
  findById,
};
