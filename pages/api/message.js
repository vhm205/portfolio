const nodemailer = require("nodemailer");
require("dotenv").config();

export default function sendMail(req, res) {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASE,
    },
    secure: true,
  });

  const option = {
    from: process.env.EMAIL,
    to: email,
    subject: `Message From ${name}`,
    text: message + " | Sent from: " + email,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  transporter.sendMail(option, function (err, info) {
    if (err) console.error(err);
    else console.log(info);
  });
  res.status(200);
}
