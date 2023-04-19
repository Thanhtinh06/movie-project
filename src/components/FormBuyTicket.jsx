import React from "react";
import { useSelector } from "react-redux";

const FormBuyTicket = () => {
  const { inforMoive } = useSelector((state) => state.quanLyDatVe);
  const { user } = useSelector(state => state.quanLyNguoiDung)
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
            <td className="px-6 py-4 text-right">Gray</td>
          </tr>
          <tr className="row-table">
            <th scope="row">Promotions</th>
            <td className="px-6 py-4 text-right">0</td>
          </tr>
          <tr className="row-table">
            <th scope="row">Total</th>
            <td className="px-6 py-4 text-right">Red</td>
          </tr>
          <tr className="row-table">
            <th scope="row" colSpan="2" className="text-center">
                <button className="btn-booking">BOOKING TICKET</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FormBuyTicket;
