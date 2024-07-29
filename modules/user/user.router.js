import express from "express"
import Router from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'
import { auth } from "../../middlwear/auth.js"
import validation from "../../middlwear/validation.js"
import { myMulter, fileValdation, HME } from "../../services/multer.js"
import * as profileController from "./controller/profile.js"
import endPoint from "./user.endPoint.js"
import * as validators from "./user.validation.js"
const router = Router()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router.use('/uploads', express.static(path.join(__dirname, '../../uploads')))

router.get("/profile", validation(validators.displayProfile), auth(endPoint.displayProfile), profileController.displayProfile)


// router.patch("/profile/pic",
//     myMulter('user/profile/pic', fileValdation.image).single('image'),
//     auth(endPoint.displayProfile),
//     profileController.profilePIc)


// router.patch("/profile/covPic",
//     myMulter('user/profile/covPic', fileValdation.image).array('image', 5), HME,
//     auth(endPoint.displayProfile),
//     profileController.coverPIC)


router.patch("/profile/password",
    validation(validators.forgetPassword),
    auth(endPoint.displayProfile),
    profileController.updatePassword)





export default router