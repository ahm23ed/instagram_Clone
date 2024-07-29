import  Router  from "express"
import { auth } from "../../middlwear/auth.js"
import { endPoint } from "./admin.endPoint.js"
import * as adminController from "./controller/admin.js"


const router = Router()


router.get("/users" , auth(endPoint.getAllUsers), adminController.getAllUsers )
router.patch("/user/:id/role" , auth(endPoint.changeRole), adminController.changeRole )
router.patch("/user/:id/block" , auth(endPoint.blockUser), adminController.blockUser )











export default router