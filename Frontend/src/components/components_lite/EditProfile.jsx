import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data";
import { setUser } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

const EditProfile = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.join(", ") || "", // Changed to string for input field
    file: user?.profile?.resume,
  });
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser({ ...res.data.user, skills: input.skills.split(",").map(s => s.trim()) }));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
    setOpen(false);
  };

  const FileChangehandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:max-w-[500px] w-full px-4 sm:px-6"
        onInteractOutside={() => setOpen(false)}
      >
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleFileChange}>
          <div className="flex flex-col gap-4 py-4">
            {/* Responsive label + input container */}
            {[
              { label: "Name", id: "fullname", type: "text", value: input.fullname, name: "fullname" },
              { label: "Email", id: "email", type: "email", value: input.email, name: "email" },
              { label: "Phone", id: "phoneNumber", type: "tel", value: input.phoneNumber, name: "phoneNumber" },
              { label: "Bio", id: "bio", type: "text", value: input.bio, name: "bio" },
              { label: "Skills (comma separated)", id: "skills", type: "text", value: input.skills, name: "skills" },
            ].map(({ label, id, type, value, name }) => (
              <div key={id} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <Label htmlFor={id} className="w-full sm:w-1/4 text-left sm:text-right">
                  {label}
                </Label>
                <input
                  type={type}
                  id={id}
                  name={name}
                  value={value}
                  onChange={changeEventHandler}
                  className="w-full sm:w-3/4 border border-gray-300 rounded-md p-2"
                />
              </div>
            ))}

            {/* Resume file upload */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <Label htmlFor="file" className="w-full sm:w-1/4 text-left sm:text-right">
                Resume
              </Label>
              <input
                type="file"
                id="file"
                name="file"
                accept="application/pdf"
                onChange={FileChangehandler}
                className="w-full sm:w-3/4 border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>

          <DialogFooter>
            {loading ? (
              <Button className="w-full my-4 flex justify-center items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" /> Please wait
              </Button>
            ) : (
              <Button type="submit" className="w-full my-4">
                Save
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfile;
