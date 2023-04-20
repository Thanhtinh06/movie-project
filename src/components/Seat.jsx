import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { quanLyDatVeActions } from "../store/quanLyDatVe/slice";

const Seat = (props) => {
  const { value } = props;
  const dispatch = useDispatch();
  const { chooseSeat } = useSelector((state) => state.quanLyDatVe);
  const changeValue = (stt) =>{
    let mod = parseInt(stt) % 16
    if (mod===0){
      mod = 16
    }
    let char = String.fromCharCode((parseInt(stt) / 16|0)+65) 
    return mod + char
  }
  const nameSeat = changeValue(value.stt)
  return (
    <input
      type="button"
      value={nameSeat}
      // value={`${String.fromCharCode(value.stt+64)}${value.stt}`}
      className={clsx("seat", {
        reserved: value.daDat,
        vip: value.loaiGhe === "Vip" ? true : false,
        checked: chooseSeat?.find(item => item.value === value) !== undefined ? true : false,
      })}
      disabled={value.daDat}
      onClick={() => {
        dispatch(quanLyDatVeActions.addSeat({value,nameSeat}));
        console.log(nameSeat)
      }}
    />
  );
};

export default Seat;
