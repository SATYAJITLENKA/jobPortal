import { User } from "../modals/user.modal.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    // let user = User.findOne({ email });
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "user already exist with this mail",
        success: false,
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashPassword,
      role,
    });
    return res.status(200).json({
      message: "Account Created Succesfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      success: false,
    });
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
  
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }
    if (role != user.role) {
      return res.status(400).json({
        message: "Account doesn't exist in the current role.",
        success: false,
      });
    }

    const tokenData={
      userId:user._id
    }
    user={
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    }
   
    const token = jwt.sign(tokenData , process.env.SECRET_KEY ,{expiresIn:'1d'})
    return res.status(200).cookie("token" ,  token , {maxAge:1*24*60*60*1000 ,httpsOnly:true , sameSite:'strict'}).json({
      message:`Welcome Back ${user.fullname}`,
      user,
      success:true
    })
  } catch (error) {
    console.log(error);
  }
};


export const logout=async(req, res)=>{
   try {
     return res.status(200).cookie("token", "" ,{maxAge:0}).json({
      message:"Logged Out successfuly"
     })
   } catch (error) {
    console.log(error)
   }
}


export const updateProfile=async(req,res)=>{
  try {
    const {fullname ,email , phoneNumber , skills , bio} =req.body;
    const file =req.file;
  //   if(!fullname || !email || !phoneNumber || !skills || !bio){
  //     return res.status(400).json({
  //       message:"user is not found",
  //       success:false
  //   })
  // }

  //setup the cloudnary
  let skillArray;
  if(skills){
    skillArray=skills.split(",")
  }
  const userId=req.id;
    const user=await User.findOne({userId})
    if(!user){
    return res.status(400).json({
      message:"user is not found",
      success:false
    })
    }
    
    // updating Data
    if(fullname) user.fullname=fullname;
    if(email) user.email=email;
    if(phoneNumber) user.phoneNumber=phoneNumber;
    if(bio) user.profile.bio=bio;
    if(skills) user.profile.skills=skillArray

    await user.save()

    user={
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    }

    return res.status(200).json({
      message:"profile updated successfully",
      success:true
    })
  } catch (error) {
    console.log(error)
  }
}