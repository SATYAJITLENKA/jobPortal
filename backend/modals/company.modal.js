import mongoose, { mongo } from "mongoose";

const companySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    describtion:{
        type:String,
        required:true,
    },
    website:{
        type:String,
    },
    location:{
        type:String,
    },
    logo:{
        type:String,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true})

export const Company=mongoose.model('Company',companySchema)