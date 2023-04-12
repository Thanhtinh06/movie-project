import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheaterGroup } from "../store/quanLyRap/thunkAction";

const TheaterGroup = () => {
  const dispatch = useDispatch()
  const { theateGroup, setTheateGroup } = useSelector((state) => state.quanLyRap);
  useEffect(() => {
    dispatch(getTheaterGroup());
  }, [dispatch]);
  return (
    <div className="flex flex-col gap-6">
      {theateGroup?.map((item, index) => {
        return (
          <div key={index} className="border-b-[1px] border-b-slate-200 pt-1 flex flex-row gap-4">
            <img src={item.hinhAnh} alt="" className="w-[45px]"/>
            <div className="infor-theate flex flex-col cursor-pointer">
              <p className="text-red-950 font-semibold">
                {item.tenCumRap}
              </p>
              <p className="text-slate-400 text-[12px]">
                {item.diaChi}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TheaterGroup;
