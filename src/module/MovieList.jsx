import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getMovieList } from "../store/quanLyPhim/thunkAction";
import { quanLyPhimActions } from "../store/quanLyPhim/slice";

const MovieList = () => {
  const dispatch = useDispatch();
  const { movieList , updateList } = useSelector((state) => state.quanLyPhim);
  
  const filterMovieList = (isPresent) => {
    return movieList?.filter((item) =>
      isPresent ? item.dangChieu : item.sapChieu
    );
  };

  const presentMovieList = filterMovieList(true);
  const upcomingMovieList = filterMovieList(false);

  useEffect(() => {
    dispatch(getMovieList());
  },[dispatch]);
  return (
    <section className="movieList my-[70px] bg-white w-[80%] m-auto pt-5 pb-10 rounded-lg">
      <div className="my-10 flex flex-row items-center justify-center gap-5">
        <button
          className="btn-movie"
          onClick={() => {
            dispatch(quanLyPhimActions.updateMovieList(presentMovieList))
          }}
        >
          Present Movie
        </button>
        <button
          className="btn-movie"
          onClick={() => {
            dispatch(quanLyPhimActions.updateMovieList(upcomingMovieList))
          }}
        >
          Upcoming Movie
        </button>
      </div>
      <div
        className="flex flex-row flex-wrap gap-6 justify-evenly"
        style={{ height: "800px", overflow: "auto" }}
      >
        {
        updateList?.map((item) => {
          return (
            <div
              className="w-[230px] bg-white border border-gray-200 rounded-lg shadow bg-[--tw-color-bg-black] dark:border-gray-700 "
              key={item.maPhim}
            >
              <NavLink to={`/movieDetail/${item.maPhim}`}>
                <img
                  className="rounded-t-lg w-[100%] h-[14rem]"
                  src={item.hinhAnh}
                  alt={item.tenPhim}
                />
              </NavLink>
              <div className="p-5 bg-[--tw-color-bg-black]">
                <NavLink to={`/movieDetail/${item.maPhim}`}>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white h-[70px]">
                    {item.tenPhim}
                  </h5>
                </NavLink>
                <NavLink
                  to={`/movieDetail/${item.maPhim}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center btn-primary"
                >
                  Buy Ticket
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MovieList;
