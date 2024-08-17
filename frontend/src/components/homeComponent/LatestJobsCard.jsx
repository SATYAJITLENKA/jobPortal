import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

export const LatestJobsCard = ({job}) => {
  console.log(job)
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold my-4">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>

      <Card className="w-[350px]">
        <CardHeader>
          <div>
            <h1  className='font-medium text-lg'>{job?.company?.name}</h1>
            <p  className='text-sm text-gray-500'>India</p>
          </div>
          <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>
            {job?.description}
            </p>
          </div>

          <CardDescription>
            <div className="flex items-center gap-2 mt-4">
              <Badge className="text-blue-700 font-bold" variant="ghost">
              {job?.position} Positions
              </Badge>
              <Badge className="text-[#F83002] font-bold" variant="ghost">
              {job?.jobType}
              </Badge>
              <Badge className="text-[#7209b7] font-bold" variant="ghost">
              {job?.salary} LPA
              </Badge>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default LatestJobsCard;
