import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import DayCard from "./DayCard";

const Weekly = () => {
  const weekly = useAppSelector((state) => state.weather.weekly);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return (
    <div className="flex gap-2 justify-between mt-6">
      {weekly.map((i: any, idx: any) => (
        <React.Fragment key={idx}>
          <DayCard data={i} day={days[idx]} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Weekly;
