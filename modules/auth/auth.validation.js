import Joi from 'joi'

export const forgetPassword = {
    body: Joi.object().required().keys({
        email: Joi.string().email().required(),
        code: Joi.number().required(),
        newPassword: Joi.string().required().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)),
        cPassword: Joi.string().valid(Joi.ref('newPassword')).required()
    })
}

export const sendCode = {
    body: Joi.object().required().keys({
        email: Joi.string().email().required()
    })
}
export const signup = {
    body: Joi.object().required().keys({
        userName: Joi.string().required().pattern(new RegExp(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/)),
        email: Joi.string().email().required(),
        age: Joi.number().min(18).required(),
        gender: Joi.valid('Male', 'Female').required(),
        password: Joi.string().required().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)),
        cPassword: Joi.string().valid(Joi.ref('password')).required()
    })
}


export const login = {

    body: Joi.object().required().keys({
        
        email: Joi.string().email().required(),
        password: Joi.string().required().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)),
    })
}


export const confirmEmail = {

    params: Joi.object().required().keys({
        token: Joi.string().required(),
    })
}


