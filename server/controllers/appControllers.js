import UserModel from "../model/User.model.js";


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

        Promise.all([existUsername, existEmail]).then(()=>{
            if(password){

            }
        }).catch(error => {
            return res.status(500).send({
                error: "Enable to hashed password."
            })
        })

    } catch (error) {
        return res.status(500).send(error);
    }
}

export async function Login(req, res) {
    res.json("Login route");
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