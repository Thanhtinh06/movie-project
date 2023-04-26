import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { quanLyDatVeActions } from "../store/quanLyDatVe/slice";
import { UserOutlined } from "@ant-design/icons";
import { addSeat } from "../store/quanLyDatVe/thunkActions";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

export const changeValue = (stt) => {
  let mod = parseInt(stt) % 16;
  if (mod === 0) {
    mod = 16;
  }
  let char = String.fromCharCode(((parseInt(stt) / 16) | 0) + 65);
  return mod + char;
};

const Seat = (props) => {
  const { value } = props;
  const dispatch = useDispatch();
  const { chooseSeat, chooseSeatOrtherPeople } = useSelector(
    (state) => state.quanLyDatVe
  );
  const {user} = useSelector(state => state.quanLyNguoiDung)
  const nameSeat = changeValue(value.stt);
  const isChoose = chooseSeat?.find(
    (item) => item.value.tenGhe === value.tenGhe
  );
  const isChooseOther = chooseSeatOrtherPeople?.find(
    (item) => item.find(seat => seat.tenGhe === value.tenGhe)
  );

  const navigate = useNavigate()

  return (
    <button
      type="button"
      className={clsx("seat", {
        reserved: value.daDat,
        vip: value.loaiGhe === "Vip" ? true : false,
        checked: isChoose ? true : false,
        ortherChoose: isChooseOther !== undefined ? true : false,
      })}
      disabled={value.daDat | (isChooseOther !== undefined)}
      onClick={() => {
        if(user){
          dispatch(addSeat({ value, nameSeat }))
        }else{
          message.error("Please login or register account before booking")
          navigate('/login')
        }
      }}
    >
      {isChooseOther !== undefined || value.daDat === true? <UserOutlined /> : nameSeat}
    </button>
  );
};

export default Seat;

