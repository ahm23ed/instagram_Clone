import { roles } from "../../middlwear/auth.js"


export const endPoint = {
    getAllUsers: [roles.Admin],
    changeRole: [roles.Admin],
    blockUser: [roles.Admin , roles.HR],


}


export default endPoint