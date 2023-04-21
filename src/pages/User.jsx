import React, { useEffect } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Square3Stack3DIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import InforUer from "../components/InforUer";
import HistoryBook from "../components/HistoryBook";
import { useDispatch, useSelector } from "react-redux";
import { getInforUser } from "../store/quanLyNguoiDung/thunkActions";

const User = () => {
  const data = [
    {
      label: "Profile",
      value: "profile",
      icon: UserCircleIcon,
      desc: <InforUer />,
    },
    {
      label: "History",
      value: "history",
      icon: Square3Stack3DIcon,
      desc: <HistoryBook />,
    },
  ];
  const { user } = useSelector(state => state.quanLyNguoiDung)
  const { reRender } = useSelector(state => state.quanLyDatVe)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getInforUser())
  },[dispatch,user,reRender])
  return (
    <div className="m-[160px] w-[60%] mx-auto p-6 bg-zinc-900 rounded-lg">
      <Tabs value="profile">
        <TabsHeader>
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2 text-[--tw-color-primary] font-semibold">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default User;
