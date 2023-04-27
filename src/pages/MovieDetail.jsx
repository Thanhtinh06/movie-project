import { useEffect } from "react";
import MovieInfor from "../components/MovieInfor";
import ScheduleMovieByDay from "../components/ScheduleMovieByDay";

const MovieDetail = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className="">
      <MovieInfor />
      <ScheduleMovieByDay />
    </div>
  );
};

export default MovieDetail;
