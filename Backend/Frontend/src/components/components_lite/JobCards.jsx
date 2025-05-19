import React from "react";
import { Badge } from "../ui/badge";
import { useNavigate } from "react-router-dom";

const JobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-4 sm:p-5 rounded-md shadow-md bg-white border border-gray-200 cursor-pointer hover:shadow-xl hover:shadow-blue-200 transition-all duration-300"
    >
      {/* Job Company Info */}
      <div className="mb-2">
        <h1 className="text-base sm:text-lg font-semibold text-gray-800">{job.name}</h1>
        <p className="text-xs sm:text-sm text-gray-500">India</p>
      </div>

      {/* Job Title & Description */}
      <div className="mb-3">
        <h2 className="font-bold text-base sm:text-lg text-gray-900 my-1">{job.title}</h2>
        <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
          {job.description}
        </p>
      </div>

      {/* Job Badges */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge className="text-blue-600 font-semibold text-xs sm:text-sm" variant="ghost">
          {job.position} Open Positions
        </Badge>
        <Badge className="text-[#FA4F09] font-semibold text-xs sm:text-sm" variant="ghost">
          {job.salary} LPA
        </Badge>
        <Badge className="text-[#6B3AC2] font-semibold text-xs sm:text-sm" variant="ghost">
          {job.location}
        </Badge>
        <Badge className="text-black font-semibold text-xs sm:text-sm" variant="ghost">
          {job.jobType}
        </Badge>
      </div>
    </div>
  );
};

export default JobCards;
