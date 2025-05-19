import React, { useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import { JOB_API_ENDPOINT, APPLICATION_API_ENDPOINT } from "@/utils/data";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Description = () => {
  const params = useParams();
  const jobId = params.id;

  const { singleJob } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useSelector((store) => store.auth);

  const isIntiallyApplied =
    singleJob?.application?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.post(
        `${APPLICATION_API_ENDPOINT}/apply/${jobId}`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        setIsApplied(true);
        const updateSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updateSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    const fetchSingleJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.status) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        } else {
          setError("Failed to fetch jobs.");
        }
      } catch (error) {
        setError(error.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchSingleJobs();
  }, [jobId, dispatch, user?._id]);

  if (!singleJob) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="max-w-7xl w-full mx-auto my-10 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-10">
          <div className="flex-1">
            <h1 className="font-bold text-xl sm:text-2xl">{singleJob?.title}</h1>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge className="text-blue-600 font-bold" variant="ghost">
                {singleJob?.position}
              </Badge>
              <Badge className="text-[#FA4F09] font-bold" variant="ghost">
                {singleJob?.salary} LPA
              </Badge>
              <Badge className="text-[#6B3AC2] font-bold" variant="ghost">
                {singleJob?.location}
              </Badge>
              <Badge className="text-black font-bold" variant="ghost">
                {singleJob?.jobType}
              </Badge>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Button
              onClick={isApplied ? null : applyJobHandler}
              disabled={isApplied}
              className={`rounded-lg px-6 py-2 text-sm sm:text-base ${
                isApplied
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-[#6B3AC2] hover:bg-[#552d9b]"
              }`}
            >
              {isApplied ? "Already Applied" : "Apply"}
            </Button>
          </div>
        </div>

        <section className="border-b border-gray-400 py-6 mt-6">
          <p className="text-base sm:text-lg">{singleJob?.description}</p>
        </section>

        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div>
            <h2 className="font-bold">Role</h2>
            <p className="pl-2 text-gray-800">{singleJob?.position}</p>
          </div>
          <div>
            <h2 className="font-bold">Location</h2>
            <p className="pl-2 text-gray-800">{singleJob?.location}</p>
          </div>
          <div>
            <h2 className="font-bold">Salary</h2>
            <p className="pl-2 text-gray-800">{singleJob?.salary} LPA</p>
          </div>
          <div>
            <h2 className="font-bold">Experience</h2>
            <p className="pl-2 text-gray-800">{singleJob?.experienceLevel} Year</p>
          </div>
          <div>
            <h2 className="font-bold">Total Applicants</h2>
            <p className="pl-2 text-gray-800">{singleJob?.applications?.length}</p>
          </div>
          <div>
            <h2 className="font-bold">Job Type</h2>
            <p className="pl-2 text-gray-800">{singleJob?.jobType}</p>
          </div>
          <div>
            <h2 className="font-bold">Post Date</h2>
            <p className="pl-2 text-gray-800">
              {singleJob?.createdAt ? singleJob.createdAt.split("T")[0] : "Not Available"}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Description;
