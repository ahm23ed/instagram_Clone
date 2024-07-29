import { roles } from "../../middlwear/auth.js"

export const endPoint = {
    displayProfile :[roles.Admin , roles.User]
}

export default endPoint