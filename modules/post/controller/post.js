// import { populate } from "../../../DB/model/comment.js"
import commentModel from "../../../DB/model/comment.js"
import postModel from "../../../DB/model/post.js"
import paginate from "../../../services/paginate.js"


export const getAllPost = async (req, res) => {
    const { page, size } = req.query
    const { skip, limit } = paginate(page, size)
    const post = await postModel.find({}).limit(limit).skip(skip).populate([
        {
            path: 'createdBy',
            select: "userName  email"
        },
        {
            path: 'comments',
            match:{
                isDeleted:false
            },
            populate: [
                {
                    path: 'createdBy',
                    select: "userName  email"
                },
                {
                    path: 'likes',
                    select: "userName  email"
                },
                {
                    path: 'reply',
                    populate: [
                        {
                            path: 'createdBy',
                            select: "userName  email"
                        },
                        {
                            path: 'likes',
                            select: "userName  email"
                        },
                        {
                            path: 'reply',
                            populate: [
                                {
                                    path: 'createdBy',
                                    select: "userName  email"

                                },
                                {
                                    path: 'likes',
                                    select: "userName  email"
                                }
                            ]
                        }

                    ]
                }
            ]
        },
        {
            path: 'likes',
            select: "userName  email"
        }
    ])

    res.status(200).json({ message: "Done", post })
}

export const createPost = async (req, res) => {
    const { text } = req.body
    if (req.fileErr) {
        res.status(400).json({ message: "in-valid format" })
    } else {
        const imageURL = [];
        req.files.forEach(file => {
            imageURL.push(`${req.finalDestination}/${file.filename}`)
        });
        const newPost = new postModel({ text, image: imageURL, createdBy: req.user._id })
        const savedPost = await newPost.save()
        res.status(201).json({ message: "Done", savedPost })
    }
}


export const likePost = async (req, res) => {
    await postModel.findByIdAndUpdate(req.params.id, { $push: { likes: req.user._id } })
    res.status(200).json({ message: "Done" })
}
export const unLikePost = async (req, res) => {
    await postModel.findByIdAndUpdate(req.params.id, { $pull: { likes: req.user._id } })
    res.status(200).json({ message: "Done" })
}





