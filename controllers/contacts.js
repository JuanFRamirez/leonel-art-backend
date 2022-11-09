const userDB = require("../db/users.json");
const mailer = require("../mail/mailer");

exports.sendContacts = (req, res) => {
  if (req.body) {
    mailer.mailer(req, res).then((data) => res.status(200).send(data));
    res.send({
      status: 200,
      message: "message sent",
    });
  } else {
    res.send({ status: 400, message: "error" });
  }
};
