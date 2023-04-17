import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheaterGroup } from "../store/quanLyRap/thunkAction";
import { NavLink } from "react-router-dom";

const MovieSchedule = () => {
  const dispatch = useDispatch();
  const { movieSchedule } = useSelector((state) => state.quanLyRap);
  useEffect(() => {
    dispatch(getTheaterGroup());
  }, [dispatch]);
  return (
    <div
      className="movie-schedule"
      style={{ height: "500px", overflow: "auto" }}>
      {movieSchedule.danhSachPhim.map((movie, index) => {
        return (
          <div key={index} className="border-b-[1px] border-b-slate-100 mt-5">
            <NavLink to={`/movieDetail/${movie.maPhim}`} className="infor-movie flex flex-row gap-4 pr-10 cursor-pointer border shadow-lg rounded-lg p-6 ">
              <img
                src={movie.hinhAnh}
                alt={movie.hinhAnh}
                className="w-[40px]"
              />
              <div className="flex flex-col items-start">
                <p className="name text-neutral-900 font-semibold">
                  {movie.tenPhim}
                </p>
                <p>{movie.dangChieu ? "Present Moive" : "Upcoming Movie"} </p>
              </div>
            </NavLink>
            <div className="schedule-movie flex flex-row flex-wrap gap-10 py-10">
              {movie.lstLichChieuTheoPhim.map((schedule, index) => {
                const date = new Date(schedule.ngayChieuGioChieu);
                return (
                  <div key={index}>
                    <button
                      className={
                        movie.dangChieu
                          ? "text-green-600 btn-schedule"
                          : "text-slate-800 btn-schedule"
                      }
                    >
                      {date.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};


export default MovieSchedule