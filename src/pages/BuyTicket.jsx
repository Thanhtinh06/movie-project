import ListSeat from "../components/ListSeat";
import FormBuyTicket from "../components/FormBuyTicket";
import { useEffect } from "react";

const BuyTicket = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="m-[200px] main flex flex-row rounded-xl overflow-hidden">
      <div className="seat-main">
      <ListSeat />
      </div>
      <div className="order">
        <FormBuyTicket />
      </div>
    </div>
  );
};

export default BuyTicket;
