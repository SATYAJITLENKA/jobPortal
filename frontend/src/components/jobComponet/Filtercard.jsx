import React from "react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const Filtercard = () => {
  const filterData = [
    {
      filterType: "Location",
      arr: ["Delhi", "Bengalore", "Bhubaneswar"],
    },
    {
      filterType: "Salary",
      arr: ["12k", "23k", "8k"],
    },
    {
      filterType: "Industry",
      arr: ["Frontend", "Backend", "fullsack"],
    },
  ];
  return (
    <div>
        <h1 className="font-bold mb-2">Filter Job</h1>
      <RadioGroup>
        {filterData.map((data) => (
          <div className="flex flex-col gap-2">
            <h1>{data.filterType}</h1>
            {data.arr.map((ele) => (
              <div className="flex items-center gap-1">
                <RadioGroupItem value={ele} />
                <Label>{ele}</Label>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default Filtercard;
