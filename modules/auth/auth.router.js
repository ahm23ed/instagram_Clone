import Router from "express"
import { auth } from "../../middlwear/auth.js"
import validation from "../../middlwear/validation.js"
import { endPoint } from "./auth.endPoint.js"
import * as validators from "./auth.validation.js"
import * as rigstirationController from "./controller/registration.js"

const router = Router()


//signup
router.post("/signup", validation(validators.signup), rigstirationController.signup)
//refresh  email 
router.get('/refreshEmail/:id', rigstirationController.refreshEmail)
//confirm email
router.get("/confirmEmail/:token", validation(validators.confirmEmail), rigstirationController.confirmEmail)

//signin 
router.post("/login", validation(validators.login), rigstirationController.login)

router.patch("/logout",auth(endPoint.logout) ,rigstirationController.logOut)

//send forget code 
router.post("/sendCode", validation(validators.sendCode), rigstirationController.sendCode)
router.post("/forgetPassword", validation(validators.forgetPassword), rigstirationController.forgetPassword)


export default router