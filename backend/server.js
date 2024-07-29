import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./DB/dbConnection.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js"
import compnyRoute from "./routes/company.route.js"
import jobRouter from "./routes/job.route.js"
import applicationRouter from "./routes/application.route.js"

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors())


const port = process.env.PORT || 3000;

//api's
app.use("/api/user",userRoute)
app.use("/api/company",compnyRoute)
app.use("/api/job",jobRouter)
app.use("/api/application",applicationRouter)

app.listen(port, () => {
  dbConnect();
  console.log(`server is running on the port ${port}`);
});
