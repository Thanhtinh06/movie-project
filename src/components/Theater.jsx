import React, { useEffect } from "react";
import TheateLogo from "../module/TheateLogo";
import TheaterGroup from "./TheaterGroup";
import MovieSchedule from "./MovieSchedule";
import { useDispatch } from "react-redux";
import { getTheaterGroup } from "../store/quanLyRap/thunkAction";


const Theater = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getTheaterGroup({id : "BHDStar"}));
  },[dispatch])
  
  return (
    <div className="theater">
      <div className="theater-content">
        <div className="theater-logo">
          <TheateLogo valueClass={"flex flex-col gap-4 items-center border-r-[1px] border-r-slate-100"} valueWidth={"w-[70px] p-3 shadow-lg rounded-lg"} />
        </div>
        <div className="theater-group">
          <TheaterGroup />
        </div>
        <div className="movie-schedule-theater">
          <MovieSchedule />
        </div>
      </div>
    </div>
  );
};

export default Theater;
