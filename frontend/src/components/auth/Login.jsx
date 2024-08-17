import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import axios from "axios";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading ,setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    role: "",
  });

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const onchangeEventHandler = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    // console.log(inputData);
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, inputData, {
        headers: { Content_Type: "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        console.log("user", res.data.user)
        dispatch((setUser(res.data.user)))
        navigate("/");
        toast.success(res.data.message);
        console.log(res.data.message);
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
          </div>
          <div className=" mt-7">
            {loading ? (
              <Button className="bg-black text-white w-full rounded hover:bg-slate-800">
                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait
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

export default Login;
