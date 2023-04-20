import { useDispatch, useSelector } from "react-redux";
import {
  bookTicket,
} from "../store/quanLyDatVe/thunkActions";
import { message } from "antd";
import { useEffect } from "react";


const FormBuyTicket = () => {
  const { inforMoive,reRender,chooseSeat } = useSelector((state) => state.quanLyDatVe);
  const { user } = useSelector((state) => state.quanLyNguoiDung);
  const dispatch = useDispatch();
  console.log(chooseSeat);

  const getTotal = () => {
    if(chooseSeat){
      return chooseSeat.reduce((total, item) => {
        total += parseFloat(item.value.giaVe);
        return total;
      }, 0);
    }
    return 0
  };

  const getListVe = () => {
    if(chooseSeat){
      return {
        maLichChieu: inforMoive?.maLichChieu,
        danhSachVe: (() => {
          return chooseSeat?.map((item) => {
            return {
              maGhe: item?.value.maGhe,
              giave: item?.value.giaVe,
            };
          });
        })(),
      };
    }
    return undefined
  };

  useEffect(()=>{

  },[reRender])

  return (
    <div className="form-order">
      <table>
        <thead>
          <tr>
            <th scope="col" className="header-table" colSpan="2">
              {inforMoive?.tenPhim}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="row-table">
            <th scope="row">Date Time</th>
            <td className="px-6 py-4 text-right">
              <span>{inforMoive?.ngayChieu}</span> {" - "}
              <span className="text-[--color-orange-black] font-semibold">
                {inforMoive?.gioChieu}
              </span>
            </td>
          </tr>
          <tr className="row-table">
            <th scope="row">Cineplex</th>
            <td className="px-6 py-4 text-right">{inforMoive?.tenCumRap}</td>
          </tr>
          <tr className="row-table">
            <th scope="row">Cinema</th>
            <td className="px-6 py-4 text-right">{inforMoive?.tenRap}</td>
          </tr>
          <tr className="row-table">
            <th scope="row">Name</th>
            <td className="px-6 py-4 text-right">{user?.hoTen}</td>
          </tr>
          <tr className="row-table">
            <th scope="row">Email</th>
            <td className="px-6 py-4 text-right">{user?.email}</td>
          </tr>
          <tr className="row-table">
            <th scope="row">Seats</th>
            <td className="px-6 py-4 text-right flex flex-col">
              {chooseSeat?.map((item) => {
                return (
                  <p key={item?.nameSeat} className="flex justify-end gap-2">
                    <span className="text-[--color-orange-black] font-semibold">
                      {" "}
                      {item?.nameSeat}
                    </span>{" "}
                    - <span>{item?.value.giaVe}</span>
                  </p>
                );
              })}
            </td>
          </tr>
          {/* <tr className="row-table">
            <th scope="row">Promotions</th>
            <td className="px-6 py-4 text-right">0</td>
          </tr> */}
          <tr className="row-table">
            <th scope="row">Total</th>
            <td className="px-6 py-4 text-right">
              <span className="font-bold text-emerald-500">{getTotal()}</span>
            </td>
          </tr>
          <tr className="row-table">
            <th scope="row" colSpan="2" className="text-center">
              <button className="btn-booking" onClick={()=>{
                 let value = getListVe();
                 console.log('value getlistVe : ',value)
                 if(value){
                  dispatch(bookTicket(value));
                 }else{
                  message.warning('Please choose seats')
                 }
              }}>
                BOOKING TICKET
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FormBuyTicket;
