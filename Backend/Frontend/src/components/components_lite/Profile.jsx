import React, { useState } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "../ui/badge";
import AppliedJob from "./AppliedJob";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAllAppliedJobs";

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />

      {/* Profile Card */}
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-6 shadow shadow-gray-400 hover:shadow-yellow-400">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user?.profile?.profilePhoto} alt="@profile" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} variant="outline">
            <Pen className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>

        {/* Contact Info */}
        <div className="my-5 space-y-3">
          <div className="flex items-center gap-3 text-sm">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${user?.email}`} className="break-all text-gray-700">
              {user?.email}
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Contact className="h-4 w-4" />
            <a href={`tel:${user?.phoneNumber}`} className="break-all text-gray-700">
              {user?.phoneNumber}
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="my-5">
          <h2 className="font-semibold">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {user?.profile?.skills?.length ? (
              user.profile.skills.map((skill, index) => (
                <Badge key={index}>{skill}</Badge>
              ))
            ) : (
              <span className="text-gray-500 text-sm">NA</span>
            )}
          </div>
        </div>

        {/* Resume Section */}
        <div className="my-5">
          <label className="font-bold text-sm block mb-1">Resume</label>
          {isResume && user?.profile?.resume ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={user.profile.resume}
              className="text-blue-600 hover:underline text-sm break-all"
            >
              Download {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-gray-500 text-sm">No Resume Found</span>
          )}
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6">
        <h2 className="text-lg font-bold mb-4">Applied Jobs</h2>
        <AppliedJob />
      </div>

      {/* Edit Profile Modal */}
      <EditProfile open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
