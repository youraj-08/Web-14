import { Router } from "express";
const router = Router();

import * as controller from "../controllers/appControllers.js"

//POST Methods.
router.route("/Register").post(controller.Register); //Register Route.
// router.route("/RegisterMail").post();
router.route("/Authenticate").post((req, res)=>res.end());
router.route("/Login").post(controller.verifyUser, controller.Login);




//GET Methods.
router.route("/User/:Username").get(controller.getUser);
router.route("/GenerateOTP").get(controller.GenerateOTP);
router.route("/VerifyOTP").get(controller.VerifyOTP);
router.route("/CreateResetSession").get(controller.CreateResetSession);




//PUT Methods.
router.route("/UpdateUser").put(controller.UpdateUser);
router.route("/ResetPassword").put(controller.ResetPassword);






export default router;