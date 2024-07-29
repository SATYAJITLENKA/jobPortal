import { Job } from "../modals/job.modal.js";

export const postJob = async (req,res) =>{
 try {
    const {
        title,
        description,
        requirements,
        salary,
        experience,
        location,
        jobType,
        position,
        companyId,
      } = req.body;
      const userId = req.id;
      if (
        !title ||
        !description ||
        !requirements ||
        !salary ||
        !experience ||
        !location ||
        !jobType ||
        !position ||
        !companyId
      ) {
        return resizeBy.status(400).json({
          message: "Something is missing",
          success: false,
        });
      }
      const job = await Job.create({
        title,
        description,
        requirements: requirements.split(","),
        salary: Number(salary),
        experienceLavel: experience,
        location,
        jobType,
        position,
        company: companyId,
        created_by: userId,
      });

      return res.status(200).json({
        message:"New job created Successfully",
        success:true
      })
 } catch (error) {
    console.log(error)
 }
};


export const getAllJobs=async(req,res)=>{
    try {
        const keyword=req.query.keyword || "" ;
        const query = {
            $or:[
                {title:{$regex:keyword, $options :"i"}},
                {description:{$regex:keyword ,$options :"i"}}
            ]
        }

        const jobs = await Job.find(query).populate({
            path:"company"
        }).sort({createdAt:-1})
        if(!jobs){
            return res.status(400).json({
                message:"Jobs not found",
                status:false
            })
        }

        return res.status(200).json({
            jobs,
            success:true
        })

    } catch (error) {
        console.log(error)
    }
}


export const getJobsById=async(req,res)=>{
    try {
        const id=req.params.id;
        const job= await Job.findById(id);
        if(!job){
            return res.status(404).json({
                message:"job not found",
                success:false
            })
        }
        return res.status(200).json({job , success:true})
    } catch (error) {
        console.log(error)
    }
}


//get all the jobs created by admin

export const getAdminJobs = async(req,res)=>{
    try {
        const adminId=req.id;
        const jobs=await Job.find({created_by:adminId});
        if(!jobs){
            return res.status(400).json({
                message:"job not found",
                success:false
            })
        }
        return res.status(200).json({
            jobs,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}