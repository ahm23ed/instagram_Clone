import userModel from "../../../DB/model/User.js"
import sendEmail from "../../../services/email.js"

export const getAllUsers = async (req, res) => {
    const users = await userModel.find({ role: { $nin: ['Admin'] } });
    res.json({ message: "Done", users })
}

export const changeRole = async (req, res) => {
    const { id } = req.params; //userID
    const { role } = req.body
    const user = await userModel.findByIdAndUpdate(id, { role }, { new: true });
    sendEmail(user.email, `<p> admin has change u  role to ${user.role}</p>`)
    res.json({ message: "Done", user })
}

export const blockUser = async (req, res) => {
    const { id } = req.params;
    const user = await userModel.findOne({ _id: id });
    if (user.role == req.user.role) {
        res.status(401).json({ message: "sorry u can't block user of with same role" })
    } else {
        await userModel.findByIdAndUpdate(user._id, { isBlooked: true })
        sendEmail(user.email, `<p> your account hase been blocked plz contact with help to re-open u account</p>`)
        res.json({ message: "Done", user })
    }

}




