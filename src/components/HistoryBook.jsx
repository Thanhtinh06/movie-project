import React from "react";
import { useSelector } from "react-redux";
import { changeValue } from "../components/Seat";
import moment from "moment";

const HistoryBook = () => {
  const { inforAccount } = useSelector((state) => state.quanLyNguoiDung);

  return (
    <div className="flex flex-col gap-6 justify-center">
      {inforAccount?.thongTinDatVe?.map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-row gap-6 bg-zinc-800 text-neutral-300 rounded-lg p-4 items-center shadow-md shadow-zinc-500"
          >
            <div>
              <img
                src={item?.hinhAnh}
                alt={item?.tenPhim}
                className="w-[80px] h-[120px] rounded-lg"
              />
            </div>
            <div>
              <p className="font-semibold text-[--color-orange-black]">
                {item?.tenPhim}
              </p>
              <div className="flex flex-row gap-3">
                <p className="font-medium">Code Ticket</p> <p>{item?.maVe}</p>
              </div>
              <div className="flex flex-row gap-3">
                <p className="font-medium">Date Book</p>
                <p>{moment(item?.ngayDat).format("DD-MM-YYYY HH:MM")}</p>
              </div>
              <div>
                <div>
                  <div className="flex flex-row gap-3">
                    <p className="font-medium">Price Ticket</p>
                    <p>{item.giaVe * item.danhSachGhe.length}</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <p className="font-medium">List Seats</p>
                  <div className="flex flex-row gap-3">
                    {item?.danhSachGhe?.map((seat, index) => {
                      return (
                        <div key={index}>
                          <p>{changeValue(seat.tenGhe)}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HistoryBook;
