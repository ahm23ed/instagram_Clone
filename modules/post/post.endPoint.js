import { roles } from "../../middlwear/auth.js"

export const endPoint = {
    createPost: [roles.Admin, roles.User]
}
export default endPoint