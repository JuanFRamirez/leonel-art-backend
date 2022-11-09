exports.mailer = async function sendMail(req, res) {
  try {
    require("dotenv").config();
    var nodemailer = require("nodemailer");

    let { name, email, message } = req.body;
    var transporter = nodemailer.createTransport({
      service: process.env.NODEMAILER_SERVICE,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    let mailOptions = {
      from: `${email}`,
      to: process.env.NODEMAILER_ADDRESS,
      subject: `Nuevo contacto de tu Portfolio`,
      html: `<div style="display:flex;flex-direction:column:justify-contents:center;font-weight:600">
      <p>${name} te ha escrito el siguiente mensaje:</p></br>
      <p>${message}.</p><br>
      <p>Contactalo a ${email}</p>
      </div>`,
    };
    let info = await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      }
      console.log("message sent");
      
    });
  } catch (error) {
    throw new Error(error);
  }
};
