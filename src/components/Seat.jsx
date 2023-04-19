import clsx from 'clsx';
import React from 'react'

const Seat = (props) => {
  const {value} = props
  return (
    <input
      type="button"
      value={value.stt}
      className={clsx('seat',{
        reserved : value.daDat,
        vip : value.loaiGhe === 'Vip' ? true : false,
      })}
      disabled={value.daDat}
    />
  );
}


export default Seat