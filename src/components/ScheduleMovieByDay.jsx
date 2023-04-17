import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { quanLyRapServices } from "../services/quanLyRap.services";
import moment from "moment";

const ScheduleMovieByDay = () => {
  const params = useParams();
  const [theate, setTheate] = useState();
  const [schedule, setSchedule] = useState();
  const [theateGroup,setTheateGroup] = useState();
  const [date, setDate] = useState();


  const uniqueDateMovie = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].lichChieuPhim.length; j++) {
        let newDate = moment(arr[i].lichChieuPhim[j].ngayChieuGioChieu).format(
          "dddd DD-MM-YYYY"
        );
        if (!newArr.includes(newDate)) {
          newArr.push(newDate);
        }
      }
    }
    return newArr;
  };

  const filterTheate = (schedule, date) => {
    let newArr = [];
    for (let i = 0; i < schedule.length; i++) {
      let theate = {...schedule[i],lichChieuPhim:[]}
      for (let j = 0; j < schedule[i].lichChieuPhim.length; j++) {
        let newDate = moment(schedule[i].lichChieuPhim[j].ngayChieuGioChieu).format(
          "dddd DD-MM-YYYY"
        );
        if(newDate===date) {
          theate.lichChieuPhim.push(schedule[i].lichChieuPhim[j])
        }
      }
      newArr.push(theate)
    }
    return newArr;
  };
  useEffect(() => {
    (async () => {
      try {
        const res = await quanLyRapServices.getMovieSchedule(params.movieId);
        const dataResponse = res.data.content.heThongRapChieu
        setTheate(dataResponse);
        setSchedule(dataResponse[0].cumRapChieu);
        setTheateGroup(dataResponse[0].cumRapChieu);
        let uniqueDate = uniqueDateMovie(
          dataResponse[0].cumRapChieu
        );
        setDate(uniqueDate);
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
      <div></div>
      <div className="grid grid-cols-6 py-10 shadow-xl p-4 my-8 rounded-lg">
        <div className="logo col-span-2 border-r-2">
          {theate?.map((item, index) => {
            return (
              <button
                key={index}
                className="flex flex-row gap-5 justify-start items-center border-b-[1px] px-5 py-2"
                onClick={() => {
                  setSchedule(item?.cumRapChieu);
                  setDate(uniqueDateMovie(item.cumRapChieu));
                  setTheateGroup(item?.cumRapChieu)
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
        <div className="schedule col-span-4 ml-8">
          <div className="date-show flex flex-row gap-4 pb-5 border-b-[2px] overflow-auto">
            {date?.map((item, index) => {
              return (
                <div key={index}>
                  <button
                    className="shadow-md p-3 text-orange-800 rounded-md font-semibold  w-[100px]"
                    onClick={() => {
                      const newArr = filterTheate(theateGroup, item);
                      setSchedule(newArr)
                    }}
                  >
                    {item}
                  </button>
                </div>
              );
            })}
          </div>
          {schedule?.map((item, index) => {
            return (
              <div className="theateGroup" key={index}>
                <div className="flex flex-col gap-4 py-4 border-b-[1px]">
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
