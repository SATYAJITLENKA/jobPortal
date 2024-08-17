import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Link, NavLink ,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, SatelliteDish, User } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const login = false;
  const logoutHandler=async()=>{
      try {
        const res=await axios.post(`${USER_API_END_POINT}/logout`,{withCredentials: true,})
        console.log(res)
        if(res.data.success){
          console.log("succedd")
          dispatch(setUser(null))
          navigate('/login')
          toast(res.data.message)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.message)
      }finally{
        
      }
  }
  const {user} =useSelector(store=>store.auth)
  return (
    <div className="z-10 bg-white shadow-md h-16 flex items-center justify-between container m-auto sticky top-0">
      <div>
      <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Portal</span></h1>
      </div>
      <div className="flex gap-12 items-center">
        <ul className="flex gap-4">
          <li><NavLink to="/" className={({isActive })=>isActive?'text-[#F83002]':''}>home</NavLink> </li>
          <li><NavLink to="/jobs" className={({isActive })=>isActive?'text-[#F83002]':''}>Jobs</NavLink> </li>
          <li><NavLink to="/browser" className={({isActive })=>isActive?'text-[#F83002]':''}>Browse</NavLink> </li>
        </ul>
        <div>
          {!user ? (
            <div className="flex gap-3 ">
              <Button variant="font-black outline rounded-md"><Link to="/login">Login</Link></Button>
              <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white rounded">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-50 bg-white">
                <div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <User/>
                    <Button className="decoration-2 hover:underline underline-offset-2"><Link to="/profile">View Profile</Link></Button>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                  <LogOut/>
                    <Button onClick={logoutHandler} className=" decoration-2 hover:underline underline-offset-2">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
