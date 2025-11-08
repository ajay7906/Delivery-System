import mongoose from "mongoose"

const connectDb=async () => {
    try {
        console.log("Mongo URL:", process.env.MONGODB_URL);
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("db connected")
    } catch (error) {
        console.log("db error")
    }
}

export default connectDb