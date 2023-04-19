// import Seat from "./Seat";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListBoxTicket } from "../store/quanLyDatVe/thunkActions";
import Seat from "./Seat";

const ListSeat = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const {listSeat,inforMoive} = useSelector((state) => state.quanLyDatVe);

  useEffect(() => {
    dispatch(getListBoxTicket({ id: params.ticketId }));
  },[dispatch,params.ticketId]);

  const renderListSeat = () => {
    return listSeat?.map((seat, index) => {
      return (
        <div key={index} className="mt-5 flex justify-evenly">
          <Seat value={seat} />
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
              {inforMoive?.tenRap} - <span className=" text-neutral-400 font-normal">{inforMoive?.tenCumRap}</span> 
            </p>
          </div>
        </div>
        <div className="title">
          <ul className="intro">
            <li className="smallBox greenBox">Selected Seat</li>
            <li className="smallBox redBox">Reserved Seat</li>
            <li className="smallBox whiteBox">Normal Seat</li>
            <li className="smallBox vipBox h-10">Vip Seat</li>
          </ul>
        </div>
        <div className="choose-seat">
          <p className="screen">SCREEN THIS WAY</p>
          <div>
            <div className="renderListSeat justify-center">{renderListSeat()}</div>
          </div>
        </div>
        <div className="btn-confirm">
            <button className="btn-main">
              Confirm Selection
            </button>
        </div>
      </div>
    </section>
  );
};

export default ListSeat;
