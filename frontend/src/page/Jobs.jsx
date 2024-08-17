import Filtercard from "@/components/jobComponet/Filtercard";
import JobCard from "@/components/jobComponet/JobCard";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import { useSelector } from "react-redux";

const Jobs = () => {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div>
      <Navbar />
      <div className="max-w-[80%] mx-auto mt-4 flex">
        <div className="w-[20%]">
          <Filtercard />
        </div>

        {allJobs.lenght <= 0 ? (
          <span>Job not Found</span>
        ) : (
          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            <div className="grid grid-cols-3 gap-3">
              {allJobs.map((job, index) => (
                <div key={index}>
                  <JobCard job={job} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
