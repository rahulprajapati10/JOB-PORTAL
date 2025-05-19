import React, { useState } from "react";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchjobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto my-10">
        <div className="flex flex-col gap-5">
          <span className="inline-flex justify-center items-center gap-2 py-1 px-4 rounded-full bg-gray-200 text-red-600 font-bold text-xl sm:text-3xl mb-6">
            <span className="text-[#614232] text-2xl sm:text-4xl">
              <PiBuildingOfficeBold />
            </span>
            No.1 Job Hunt Website
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold leading-snug">
            Search Apply & <br />
            Get Your <span className="text-[#6A38C2]">Dream Job</span>
          </h2>

          <p className="text-sm sm:text-base mt-2">
            Start your hunt for the best, life-changing career opportunities
            from here in your <br className="hidden sm:block" />
            selected areas conveniently and get hired quickly.
          </p>

          <div className="flex w-full sm:w-3/4 md:w-2/4 lg:w-2/5 shadow-lg border border-gray-300 pl-3 rounded-full items-center gap-4 mx-auto mt-6">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find Your Dream Job"
              className="outline-none border-none w-full text-sm sm:text-base py-2 rounded-l-full"
            />
            <Button onClick={searchjobHandler} className="rounded-r-full px-4 py-2">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
