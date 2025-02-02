import Joi  from "joi"
export const forgetPassword = {
    body: Joi.object().required().keys({
        oldPassword: Joi.string().required().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)),
        newPassword: Joi.string().required().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)),
        cPassword: Joi.string().valid(Joi.ref('newPassword')).required()
    })
}

export const displayProfile = {
    headers: Joi.object().required().keys({
        authorization: Joi.string().required()
    }).options({ allowUnknown: true })
}

