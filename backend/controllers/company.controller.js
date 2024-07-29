import {Company} from "../modals/company.modal.js";

export const registerCompany= async (req, res) => {
  try {
    const { companyName} = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company Name is missing",
        success: false,
      });
    }
  
    let company =await Company.findOne({ name:companyName });
    if (company) {
      return res.status(400).json({
        message: "company already registered",
        success: false,
      });
    }

     company =await Company.create({
        name:companyName,
        userId:req.id
     })

    return res.status(200).json({
        message:"Company registered successfully",
        success:true
    })
  } catch (error) {
    console.log(error)
  }
};

export const getCompany=async(req,res)=>{
    try {
        const userId=req.id // this userid id the loggedin user's id
        const companies =await Company.findOne({userId})
        if(!companies){
            return res.status(400).json({
                message:"Company is not Found",
                success:false
            })
        }
        
        return res.status(200).json({
            companies,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}


//get indivisual company by id
export const getCompanyById=async(req,res)=>{
    try {
        const companyId=req.params.id 
        const company =await Company.findById(companyId)
        if(!company){
            return res.status(400).json({
                message:"Company is not Found",
                success:false
            })
        }
        
        return res.status(200).json({
            company,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

//Update company

export const updateCompany=async(req,res)=>{
    try {
        const {name,description,website,location}=req.body;
        const file=req.file;
        //this space for cloudinary

        //

        const updateData={name,description,website,location}

       const company=await Company.findByIdAndUpdate(req.params.id,updateData ,{new:true})
       
       if(!company){
        return res.status(400).json({
            message:"Company not found",
            success:true
        })
       }

       return res.status(200).json({
        message:"Company updated Successfully",
        success:true
    })
    } catch (error) {
        console.log(error )
    }
}
