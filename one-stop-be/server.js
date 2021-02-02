const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const nodemailer = require("nodemailer");
const router = express.Router();

const apiRouter = require("./api/api-router.js");
const registeredRouter = require("./users/users-router.js");
const configureMiddleware = require("./api/configure-middleware.js");

const server = express();
server.use(helmet());
server.use(cors());

configureMiddleware(server);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome!" });
});

server.use("/api", apiRouter);
server.use("/api/user", registeredRouter);

module.exports = server;

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "onestopgigs@gmail.com",
    pass: "Xavier58!",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "onestopgigs@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
