import  jwt  from "jsonwebtoken";

//Auth middleware.
export default async function Auth(req, res, next) {
    try {

        //access authorize header to calidate request.
        const token = req.headers.authorization.split(" ")[1];
        
        //retrive the user details for the logged in user.
        const decodedToken = await jwt.verify(token, process.env.SECRET)

        req.user = decodedToken;

        next()

    } catch (error) {
        res.status(401).json({ error: "Authentication Failed" })
    }
}

export function localVariables(req, res, next){
    req.app.locals = {
        OTP: null,
        resetSession: false
    }
    next()
}