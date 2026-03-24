import mongoose from "mongoose";

const connectDB = async () => {
try {
await mongoose.connect(process.env.MONGO_URL)

console.log("MongoDb is connected")
} catch (error) {
console.log("connecting error in MongoDb", error.message)
}
}

export default connectDB