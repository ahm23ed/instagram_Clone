import Joi from "joi"
export const createPost = {

    body: Joi.object().required().keys({
        text: Joi.string()
    })
}


export const createComment = {

    body: Joi.object().required().keys({
        text: Joi.string().required(),
    
    }),
    params:Joi.object().required().keys({
        id:Joi.string().min(24).max(24).required()
    })
}

export const likePost = {

    params:Joi.object().required().keys({
        id:Joi.string().min(24).max(24).required()
    })
}


export const replyOnComment = {
    body: Joi.object().required().keys({
        text: Joi.string().required(),
    
    }),
    params:Joi.object().required().keys({
        id:Joi.string().min(24).max(24).required(),
        commentID:Joi.string().min(24).max(24).required(),
    })
}


export const replyOnReplyOnComment = {
    body: Joi.object().required().keys({
        text: Joi.string().required(),
    
    }),
    params:Joi.object().required().keys({
        id:Joi.string().min(24).max(24).required(),
        commentID:Joi.string().min(24).max(24).required(),
        replyID:Joi.string().min(24).max(24).required(),
    })
}





