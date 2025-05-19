import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: [
      "Delhi",
      "Mumbai",
      "Kolhapur",
      "Pune",
      "Bangalore",
      "Hyderabad",
      "Chennai",
      "Remote",
    ],
  },
  {
    filterType: "Technology",
    array: [
      "Mern",
      "React",
      "Data Scientist",
      "Fullstack",
      "Node",
      "Python",
      "Java",
      "frontend",
      "backend",
      "mobile",
      "desktop",
    ],
  },
  {
    filterType: "Experience",
    array: ["0-3 years", "3-5 years", "5-7 years", "7+ years"],
  },
  {
    filterType: "Salary",
    array: ["0-50k", "50k-100k", "100k-200k", "200k+"],
  },
];

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue, dispatch]);

  return (
    <div className="w-full bg-white rounded-md p-4 sm:p-6 md:p-8">
      <h1 className="font-bold text-xl mb-4">Filter Jobs</h1>
      <hr className="mb-6" />
      <RadioGroup value={selectedValue} onValueChange={handleChange}>
        <div className="flex flex-col md:flex-row md:space-x-8">
          {filterData.map((data, index) => (
            <div key={index} className="mb-6 md:mb-0 flex-1">
              <h2 className="font-semibold text-lg mb-3">{data.filterType}</h2>
              <div className="flex flex-wrap gap-3">
                {data.array.map((item, indx) => {
                  const itemId = `Id${index}-${indx}`;
                  return (
                    <div
                      key={itemId}
                      className="flex items-center space-x-2 cursor-pointer"
                    >
                      <RadioGroupItem value={item} id={itemId} />
                      <label
                        htmlFor={itemId}
                        className="select-none text-gray-700"
                      >
                        {item}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default Filter;
