import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTheaterGroup } from "../store/quanLyRap/thunkAction";
import { quanLyRapActions } from "../store/quanLyRap/slice";

const TheaterGroup = () => {
  const dispatch = useDispatch();
  const { theateGroup } = useSelector((state) => state.quanLyRap);
  useEffect(() => {
    dispatch(getTheaterGroup());

  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6 h-[500px] overflow-auto">
      {theateGroup?.map((item, index) => {
        return (
          <div
            key={index}
            className="border-b-[1px] border-b-slate-200 pt-1 flex flex-row gap-4 items-center shadow-lg p-3 rounded-sm"
            onClick={() => {
              const theate = theateGroup?.find(
                (theate) => theate.tenCumRap === item.tenCumRap
              );
              dispatch(quanLyRapActions.updateSchedule(theate))
            }}
          >
            <img src={item.hinhAnh} alt={item.hinhAnh} className="w-[45px] h-[45px]" />
            <div className="infor-theate flex flex-col cursor-pointer">
              <p className="text-red-950 font-semibold">{item.tenCumRap}</p>
              <p className="text-slate-400 text-[12px]">{item.diaChi}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TheaterGroup;
