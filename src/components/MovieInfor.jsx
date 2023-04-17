import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import moment from "moment";
import { quanLyPhimServices } from "../services/quanLyPhim.services";

const MovieInfor = () => {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState();  

  useEffect(() => {
    (async () => {
      try {
        const res = await quanLyPhimServices.getMovieById(params.movieId);
        setMovieDetail(res.data.content);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.movieId]);

  return (
    <div className="my-[87px] py-10 bg-movie-detail-bg bg-no-repeat bg-bottom">
      <div className="w-[60%] m-auto flex flex-row items-center justify-center gap-8">
        <div className="col-4">
          <img className="w-[900px] h-[400px] rounded-lg" src={movieDetail?.hinhAnh} alt={movieDetail?.tenPhim}></img>
        </div>
        <div className="col-8 text-start text-white">
          <h2 className="text-2xl font-bold">{movieDetail?.tenPhim}</h2>
          <p className="mt-3 text-lg text-orange-400">{moment(movieDetail?.ngayKhoiChieu).format('DD-MM-YYYY HH:MM A')}</p>
          <p>{movieDetail?.moTa}</p>
          <button to="tabMovieSchedule" className="btn-primary mt-5" >Buy Ticket</button>
        </div>
        <div>
          <p>{movieDetail?.danhGia}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieInfor