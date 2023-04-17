import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTheaterList,
  getTheaterGroup,
} from "../store/quanLyRap/thunkAction";

const TheateLogo = (props) => {
  const dispatch = useDispatch();
  const { theateList } = useSelector((state) => state.quanLyRap);
  useEffect(() => {
    dispatch(getTheaterList());
  }, [dispatch]);

  return (
    <div className={props.valueClass}>
      {theateList?.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              dispatch(getTheaterGroup({id: item.maHeThongRap}));
            }}
          >
            <img
              src={item.logo}
              alt={item.tenHeThongRap}
              className={props.valueWidth}
            />
          </button>
        );
      })}
    </div>
  );
};

export default TheateLogo;
