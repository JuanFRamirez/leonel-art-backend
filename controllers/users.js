const userDB = require("../db/users.json")
exports.getUsers = (req,res) => {
    const data = userDB
    res.send(data);
  };