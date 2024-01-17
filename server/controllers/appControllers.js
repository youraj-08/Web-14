import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Middleware for verify user.
export async function verifyUser(req, res, next) {
    try {
        const {username}= req.method == "GET" ? req.query : req.body;

        //check the user existence.
        let exist = await UserModel.findOne({username});
        if(!exist) return res.status(404).send({error: "Can't find User!"});
        next();

    } catch (error) {
return res.status(404).send({error: "Authentication Error"});
    }
}

export async function Register(req, res) {

    try {
        const { username, password, profile, email } = req.body;

        //check for existing user
        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, function (err, user) {
                if (err) reject(new Error(err))
                if (user) reject({ error: "Username already exists" });

                resolve();
            })
        });

        //check for existing email
        const existEmail = new Promise((resolve, reject) => {
            UserModel.findOne({ email }, function (err, email) {
                if (err) reject(new Error(err))
                if (email) reject({ error: "Email already exists" });

                resolve();
            })
        });

        Promise.all([existUsername, existEmail]).then(() => {
            if (password) {
                bcrypt.hash(password, 10).then(hashedPassword => {

                    const user = new UserModel({
                        username,
                        password: hashedPassword,
                        profile: profile || "",
                        email
                    });

                    // return save result as a response.
                    user.save()
                        .then(result => res.status(201).send({ msg: "User registered successfully." }))
                        .catch(error => res.status(500).send({ error }))


                }).catch(error => {
                    return res.status(500).send({
                        error: "Enable to hashed password."
                    })
                })

            }
        }).catch(error => {
            return res.status(500).send({ error })
        })

    } catch (error) {
        return res.status(500).send(error);
    }
}

export async function Login(req, res) {
    const { username, password } = req.body;

    try {
        UserModel.findOne({ username })
            .then(user => {

                bcrypt.compare(password, user.password)
                    .then(passwordCheck => {
                        if (!passwordCheck) return res.status(400).send({ error: "Dont have a password" })

                        // create jwt token
                        jwt.sign({
                            userId: user.id,
                            username: user.username,
                        }, process.env.SECRET, { expireIn: "24h" });

                        return res.status(200).send({
                            msg: "Login Successful..!",
                            username: user.username,
                            token
                        })


                    })
                    .catch(error => {
                        return res.status(400).send({ errror: "Password doesnot match." });
                    })
            })
            .catch(error => {
                return res.status(404).send({ errror: "Username not found" });
            })
    } catch (error) {
        return res.status(500).send({ errror });

    }
}

export async function getUser(req, res) {
    res.json("getUser route");
}


export async function UpdateUser(req, res) {
    res.json("UpdateUser route");
}

export async function GenerateOTP(req, res) {
    res.json("GenerateOTP route");
}

export async function VerifyOTP(req, res) {
    res.json("VerifyOTP route");
}

export async function CreateResetSession(req, res) {
    res.json("CreateResetSession route");
}

export async function ResetPassword(req, res) {
    res.json("ResetPassword route");
}