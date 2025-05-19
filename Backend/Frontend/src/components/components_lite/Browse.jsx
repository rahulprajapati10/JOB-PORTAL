import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Job1 from "./Job1";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import Footer from "./Footer";

const Browse = () => {
  useGetAllJobs();
  const { allJobs } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10 px-4">
        <h1 className="font-bold text-xl mb-10">
          Search Results ({allJobs.length})
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allJobs.map((job) => (
            <Job1 key={job._id} job={job} />
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Browse;
