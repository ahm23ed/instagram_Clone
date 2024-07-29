import { roles } from "../../middlwear/auth.js"


export const endPoint = {
    logout:[roles.Admin , roles.HR , roles.User]
}


export default endPoint