import React from 'react'

const Seat = (props) => {
  const {value} = props
  return (
    <input
      type="button"
      value={value.stt}
      className='seat'
      disabled ={value.daDat}
    />
  );
}


export default Seat