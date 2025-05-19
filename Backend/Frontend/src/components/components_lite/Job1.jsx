import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Bookmark } from "lucide-react";

const Job1 = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-4 sm:p-5 rounded-md shadow-md bg-white border border-gray-100 hover:shadow-lg transition-all duration-300">
      {/* Top Row: Date + Bookmark */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs sm:text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 my-3 flex-wrap">
        <Avatar className="w-12 h-12 border">
          <AvatarImage src={job?.company?.logo} />
        </Avatar>
        <div>
          <h1 className="text-base sm:text-lg font-semibold">{job?.company?.name}</h1>
          <p className="text-xs sm:text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title and Description */}
      <div>
        <h2 className="font-bold text-base sm:text-lg mb-1">{job?.title}</h2>
        <p className="text-sm sm:text-base text-gray-600 line-clamp-3">{job?.description}</p>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="text-blue-700 font-semibold text-xs sm:text-sm" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83002] font-semibold text-xs sm:text-sm" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-semibold text-xs sm:text-sm" variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-5">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="text-sm sm:text-base"
        >
          Details
        </Button>
        <Button className="bg-[#7209b7] text-white text-sm sm:text-base">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job1;
