import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { quanLyRapServices } from "../services/quanLyRap.services";
import moment from "moment";

const ScheduleMovieByDay = () => {
  const params = useParams();
  const [theate, setTheate] = useState();
  const [schedule, setSchedule] = useState();
  const [date,setDate] = useState();
  console.log(theate);

  useEffect(() => {
    (async () => {
      try {
        const res = await quanLyRapServices.getMovieSchedule(params.movieId);
        setTheate(res.data.content.heThongRapChieu);
        setSchedule(res.data.content.heThongRapChieu[0].cumRapChieu);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.movieId]);

  return (
    <div className="w-[60%] m-auto" id="tabMovieSchedule">
      <div className="text-2xl text-orange-800 font-bold text-center">
        Showtimes
      </div>
      <div>

      </div>
      <div className="grid grid-cols-6 py-10">
        <div className="logo col-span-2">
          {theate?.map((item, index) => {
            return (
              <button
                key={index}
                className="flex flex-row gap-5 justify-start items-center"
                onClick={()=>{
                  setSchedule(item.cumRapChieu)
                }}
              >
                <img src={item.logo} alt="" className="w-[50px]" />
                <p className="uppercase text-[14px] font-semibold">
                  {item.tenHeThongRap}
                </p>
              </button>
            );
          })}
        </div>
        <div className="schedule col-span-4">
          {schedule?.map((item, index) => {
            return (
              <div className="theateGroup" key={index}>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row gap-4">
                    <img
                      src={item.hinhAnh}
                      alt={item.tenCumRap}
                      className="w-[50px] h-[50px]"
                    />
                    <div className="infor-theate flex flex-col">
                      <p className="text-green-700 font-semibold">
                        {item.tenCumRap}
                      </p>
                      <p className=" text-neutral-600 text-[14px]">
                        {item.diaChi}
                      </p>
                    </div>
                  </div>
                  <div className="schedule flex flex-wrap flex-row gap-4">
                      {item?.lichChieuPhim.map((schedule, index) => {
                        return (
                          <button className="btn-movie" key={index}>
                            {moment(schedule?.ngayChieuGioChieu).format(
                              "HH : MM A"
                            )}
                          </button>
                        );
                      })}
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScheduleMovieByDay;
