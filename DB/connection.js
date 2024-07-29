import mongoose from 'mongoose'

const connectDB = async ()=>{
    return await mongoose.connect(process.env.DBURI)
    .then(res => console.log(`connected DB on url .....${process.env.DBURI}`))
    .catch(err => console.log('fail to connect'))
}

export default connectDB