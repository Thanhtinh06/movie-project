// import Seat from "./Seat";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListBoxTicket } from "../store/quanLyDatVe/thunkActions";
import Seat from "./Seat";
import { connection } from "./../index";
import { quanLyDatVeActions } from "../store/quanLyDatVe/slice";
import _ from 'lodash';


const ListSeat = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { listSeat, inforMoive, reRender,isLoading } = useSelector(
    (state) => state.quanLyDatVe
  );
  const {user} = useSelector(state => state.quanLyNguoiDung)

  //clear seat
  const clearSeat = function(event) {
    connection.invoke('huyDat',user?.taiKhoan,inforMoive?.maLichChieu)
  }

  useEffect(() => {
    dispatch(getListBoxTicket({ id: params.ticketId }));

    // co client dat ve thanh cong se load lai danh sach ve cua phong chieu do
    connection.on("datGheThanhCong",()=>{
      dispatch(getListBoxTicket({ id: params.ticketId }))
    })
    
    //vừa vào load danh sách đang đặt
    connection.invoke("loadDanhSachGhe",inforMoive?.maLichChieu)

    //load danh sach get dang dat tu server ve

    connection.on("loadDanhSachGheDaDat", (dsGheDaDatReturn) => {
      //Buoc 1 loai minh ra khoi danh sach
      let data = dsGheDaDatReturn.filter(item => item.taiKhoan !== user?.taiKhoan)
      let dataNew = data.map((item) => {
        const dataItem = _.uniqBy(JSON.parse(item.danhSachGhe),"maGhe")
        return dataItem
      });
      //dispatch to store
      dispatch(quanLyDatVeActions.updatechooseSeatOrtherPeople(dataNew))      
    });

    // cài đặt sự kiện khi reload trang
    window.addEventListener("beforeunload",clearSeat);
    return () => {
      clearSeat();
      window.removeEventListener("beforeunload",clearSeat)
    }

  }, [dispatch, params.ticketId, reRender]);


  const renderListSeat = () => {
    return listSeat?.map((seat, index) => {
      return (
        <div key={index} className="mt-5 flex justify-evenly text-sm">
          <Seat value={seat} />
        </div>
      );
    });
  };

  const renderRow = () => {
    let countArray = Array.from(
      { length: (listSeat.length / 16) | 0 },
      (_, i) => i + 1
    );
    return countArray?.map((index) => {
      return (
        <div key={index} className="mt-5">
          <p className=" text-sm text-zinc-400 border border-gray-500 px-3 rounded-md shadow-slate-900 shadow-lg">
            {String.fromCharCode(index + 64)}
          </p>
        </div>
      );
    });
  };
  return (
    <section className="list-seat">
      <div className="container">
        <div className="infor-moive my-5 flex flex-row gap-5">
          <img
            src={inforMoive?.hinhAnh}
            alt=""
            className="w-[80px] rounded-md"
          />
          <div>
            <p className="text-lime-300 font-semibold">
              {inforMoive?.ngayChieu} - <span> {inforMoive?.gioChieu}</span>
            </p>
            <p className="text-gray-300 font-semibold">
              {inforMoive?.tenRap} -{" "}
              <span className=" text-neutral-400 font-normal">
                {inforMoive?.tenCumRap}
              </span>
            </p>
          </div>
        </div>
        <div className="title">
          <ul className="intro">
            <li className="smallBox greenBox">Selected Seat</li>
            <li className="smallBox redBox">Reserved Seat</li>
            <li className="smallBox whiteBox">Normal Seat</li>
            <li className="smallBox vipBox h-10">Vip Seat</li>
            <li className="smallBox ortherChoose">People Choosing</li>
          </ul>
        </div>
        <div className="choose-seat">
          <p className="screen">SCREEN THIS WAY</p>
          <div className="flex flex-row gap-2">
            <div className="w-[5%] flex flex-col items-center justify-evenly">
              {renderRow()}
            </div>
            <div className="renderListSeat justify-center w-[95%]">
              {renderListSeat()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListSeat;
