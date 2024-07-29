import express from "express"
import {postJob , getAdminJobs ,getJobsById ,getAllJobs} from "../controllers/job.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router=express.Router();


router.route('/post').post(isAuthenticated,postJob)
router.route('/get').get(isAuthenticated,getAllJobs)
router.route('/getadminjobs').get(isAuthenticated,getAdminJobs)
router.route('/get/:id').get(isAuthenticated,getJobsById)

export default router;