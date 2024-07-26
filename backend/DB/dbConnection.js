import mongoose from "mongoose";

const dbConnect=async()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("database connected successfully")
  } catch (error) {
    console.log(error)
  }
}

export default dbConnect;