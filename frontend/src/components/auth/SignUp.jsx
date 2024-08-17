import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { RadioGroup } from "../ui/radio-group";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const SignUp = () => {
  const [inputData, setInputData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const navigate = useNavigate();
  const onchangeEventHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const onchangeFileHandler = (e) => {
    setInputData({ ...inputData, file: e.target.files?.[0] });
  };
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const submitHandler = async (e) => {
    e.preventDefault();
  

    const formData = new FormData();
    formData.append("fullname", inputData.fullname);
    formData.append("email", inputData.email);
    formData.append("password", inputData.password);
    formData.append("phoneNumber", inputData.phoneNumber);
    formData.append("role", inputData.role);
    if (inputData.file) {
      formData.append("file", inputData.file);
    }
    console.log(formData);
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { Content_Type: "multipart/form-data" },
        withCredentials: true,
      });
      console.log(res);
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div>
      <Navbar />
      <div className="w-1/2 m-auto mt-4">
        <form onSubmit={submitHandler}>
          <h1 className="font-bold text-2xl text-center">Sign Up</h1>
          <div>
            <Label className="text-lg ">Full name</Label>
            <Input
              name="fullname"
              value={inputData.fullname}
              onChange={onchangeEventHandler}
              className="rounded"
              type="text"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="mt-2">
            <Label className="text-lg">Email</Label>
            <Input
              placeholder="Email"
              className="rounded "
              type="email"
              name="email"
              onChange={onchangeEventHandler}
              value={inputData.email}
            />
          </div>
          <div className="mt-2">
            <Label className="text-lg">Phone Number</Label>
            <Input
              placeholder="Enter Phone Number"
              className="rounded font-xl"
              type="number"
              name="phoneNumber"
              onChange={onchangeEventHandler}
              value={inputData.phoneNumber}
            />
          </div>
          <div className="mt-2">
            <Label className="text-lg">Password</Label>
            <Input
              placeholder="Enter Password"
              className="rounded "
              type="password"
              name="password"
              onChange={onchangeEventHandler}
              value={inputData.password} 
            />
          </div>
          <div>
            <RadioGroup className=" flex gap-3 mt-4">
              <div className="flex items-center space-x-2">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="role"
                  value="student"
                  checked={inputData.role === "student"}
                  onChange={onchangeEventHandler}
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  className="cursor-pointer"
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={inputData.role === "recruiter"}
                  onChange={onchangeEventHandler}
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex gap-2 mt-2 items-center">
              <Label>Profile</Label>
              <input
                type="file"
                accept="image/*"
                onChange={onchangeFileHandler}
                name="file"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="mt-7">
            {loading ? (
              <Button
                className="bg-black text-white w-full rounded hover:bg-slate-800"
                type="submit"
              >
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                please wait
              </Button>
            ) : (
              <Button
                className="bg-black text-white w-full rounded hover:bg-slate-800"
                type="submit"
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
