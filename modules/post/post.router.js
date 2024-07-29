import { auth } from "../../middlwear/auth.js"
import { myMulter, fileValdation } from "../../services/multer.js"
import { endPoint } from "./post.endPoint.js"
import * as postController from "./controller/post.js"
import * as commentController from "./controller/comment.js"
import validation from  "../../middlwear/validation.js"
import * as validators from "./post.validation.js"
import  Router  from "express"
const router = Router()

router.get("/",
    postController.getAllPost)
// router.post("/",
//     auth(endPoint.createPost),
//     myMulter('/post', fileValdation.image).array('image', 5),
//     validation(validators.createPost),
//     postController.createPost)

router.patch("/:id/comment",
    auth(endPoint.createPost),
    validation(validators.createComment),
    commentController.createComment)

router.patch("/:id/like",
    auth(endPoint.createPost),
    validation(validators.likePost),
    postController.likePost)
    
router.patch("/:id/unlike",
    auth(endPoint.createPost),
    validation(validators.likePost),
    postController.unLikePost)

router.patch("/:id/comment/:commentID/reply",
auth(endPoint.createPost),
validation(validators.replyOnComment),
commentController.replyOnComment )

router.patch("/comment/:id/like",
    auth(endPoint.createPost),
    validation(validators.likePost),
    commentController.likeComment)

router.patch("/comment/:id/unlike",
    auth(endPoint.createPost),
    validation(validators.likePost),
    commentController.unLikeComment)


export default router