import React from "react";
import TheateLogo from "../module/TheateLogo";
import TheaterGroup from "./TheaterGroup";
import MovieSchedule from "./MovieSchedule";

const Theater = () => {
  return (
    <div className="theater ">
      <div className="theater-content">
        <div className="theater-logo">
          <TheateLogo valueClass={"flex flex-col gap-4 items-center border-r-[1px] border-r-slate-100"} valueWidth={"w-[50px]"} />
        </div>
        <div className="theater-group">
          <TheaterGroup />
        </div>
        <div className="movie-schedule-theater ">
          <MovieSchedule />
        </div>
      </div>
    </div>
  );
};

export default Theater;
