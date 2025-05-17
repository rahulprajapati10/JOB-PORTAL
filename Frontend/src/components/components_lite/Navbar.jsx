import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2, Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { USER_API_ENDPOINT } from "@/utils/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const logoutHandler = async () => {
    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCredentials: true,
      });
      if (res?.data?.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      } else {
        console.error("Error logging out:", res.data);
      }
    } catch (error) {
      toast.error("Error logging out. Please try again.");
    }
  };

  const renderLinks = () => (
    <>
      {user && user.role === "Recruiter" ? (
        <>
          <li><Link to={"/admin/companies"}>Companies</Link></li>
          <li><Link to={"/admin/jobs"}>Jobs</Link></li>
        </>
      ) : (
        <>
          <li><Link to={"/Home"}>Home</Link></li>
          <li><Link to={"/Browse"}>Browse</Link></li>
          <li><Link to={"/Jobs"}>Jobs</Link></li>
          <li><Link to={"/Creator"}>About</Link></li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 max-w-7xl mx-auto">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[#6B3AC2]"> Job </span>
            <span className="text-[#FA4F09]">Portal</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex font-medium items-center gap-6">
            {renderLinks()}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to={"/login"}><Button variant="outline">Login</Button></Link>
              <Link to={"/register"}><Button className="bg-red-600 hover:bg-red-700">Register</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.profile?.profilePhoto} />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={user?.profile?.profilePhoto} />
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{user?.fullname}</h3>
                    <p className="text-sm text-muted-foreground">{user?.profile?.bio}</p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
                  {user?.role === "Student" && (
                    <div className="flex items-center gap-2">
                      <User2 />
                      <Button variant="link"><Link to={"/Profile"}>Profile</Link></Button>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <LogOut />
                    <Button onClick={logoutHandler} variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-white border-t">
          <ul className="flex flex-col gap-4 font-medium">
            {renderLinks()}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            {!user ? (
              <>
                <Link to={"/login"}><Button variant="outline" className="w-full">Login</Button></Link>
                <Link to={"/register"}><Button className="bg-red-600 hover:bg-red-700 w-full">Register</Button></Link>
              </>
            ) : (
              <>
                {user?.role === "Student" && (
                  <Button variant="ghost" onClick={() => navigate("/Profile")}>Profile</Button>
                )}
                <Button variant="destructive" onClick={logoutHandler}>Logout</Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
