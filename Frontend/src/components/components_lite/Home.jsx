import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Header from "./Header";
import Categories from "./Categories";
import LatestJobs from "./LatestJobs";
import Footer from "./Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { loading, error } = useGetAllJobs();
  const jobs = useSelector((state) => state.jobs.allJobs);
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "Recruiter") {
      navigate("/admin/companies");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Categories />
          {loading && (
            <p className="text-center text-gray-500 mt-6 text-sm sm:text-base">
              Loading jobs...
            </p>
          )}
          {error && (
            <p className="text-center text-red-500 mt-6 text-sm sm:text-base">
              Error: {error}
            </p>
          )}
          {!loading && !error && <LatestJobs jobs={jobs} />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
