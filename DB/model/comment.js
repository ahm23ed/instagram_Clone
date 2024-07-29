import mongoose from 'mongoose'
const commentSchema = new mongoose.Schema({
    text: String,
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    postId :{ type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    isDeleted: { type: Boolean, default: false },
    deletedBy : { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    reply: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
}, {
    timestamps: true
})


export const commentModel = mongoose.model('Comment', commentSchema);
export default commentModel