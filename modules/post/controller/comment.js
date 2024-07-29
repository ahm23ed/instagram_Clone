import commentModel from "../../../DB/model/comment.js"
import postModel from "../../../DB/model/post.js"



export const createComment = async (req, res) => {
    const { text } = req.body;
    const { id } = req.params;
    const { _id } = req.user

    const post = await postModel.findOne({ _id: id })
    if (!post) {
        res.status(404).json({ message: "In-valid post id" })
    } else {
        const createComment = new commentModel({ text, createdBy: _id, postId: post._id })
        const savedComment = await createComment.save()
        await postModel.findByIdAndUpdate(post._id, { $push: { comments: savedComment._id } })
        res.status(200).json({ message: "Done" })
    }
}


export const replyOnComment = async (req, res) => {
    const { text } = req.body;
    const { id, commentID } = req.params;
    const { _id } = req.user

    const post = await postModel.findOne({ _id: id })
    if (!post) {
        res.status(404).json({ message: "In-valid post id" })
    } else {
        const comment = await commentModel.findOne({_id:commentID , postId:post._id})
        if (!comment) {
            res.status(404).json({ message: "In-valid comment id" })
        } else {
            const createComment = new commentModel({ text, createdBy: _id, postId: post._id })
            const savedComment = await createComment.save()
            await commentModel.findByIdAndUpdate(commentID, { $push: { reply: savedComment._id } })
            res.status(200).json({ message: "Done" })
        }
    }

}



export const likeComment = async (req, res) => {
    await commentModel.findByIdAndUpdate(req.params.id, { $push: { likes: req.user._id } })
    res.status(200).json({ message: "Done" })
}

export const unLikeComment = async (req, res) => {
    await commentModel.findByIdAndUpdate(req.params.id, { $pull: { likes: req.user._id } })
    res.status(200).json({ message: "Done" })
}


