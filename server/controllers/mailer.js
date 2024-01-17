import nodemailer from "nodemailer";
import mailgen from "mailgen";
import Mailgen from "mailgen";

let nodeConfig = {
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
}

let transporter = nodemailer.createTransport(nodeConfig);

let mailGenerator = new Mailgen({
    theme: "default",
    product: {
        name: "Mailgen",
        link: "https://mailgen.js/"
    }
})

export const registerMail = async (req, res) => {
    const { username, userEmail, text, subject } = req.body;

    //body of the email
    var email = {
        name: username,
        intro: text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        outro: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }


    var emailBody = mailGenerator.generate(email);

    let message = {
        from: process.env.EMAIL,
        to: userEmail,
        subject: subject || "Lorem Ipsum  dolor.",
        html: emailBody
    }

    //Send mail.
    transporter.sendMail(message)
        .then(() => {
            return res.status(200).send({ msg: "Email sent." })
        })
        .catch(error => res.status(500).send({ error }))
}