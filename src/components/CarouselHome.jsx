import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getBanner } from "../store/quanLyPhim/thunkAction";
import { Carousel } from "antd";

const CarouselHome = () => {
  const dispatch = useDispatch();
  const { banner } = useSelector((state) => state.quanLyPhim);
  useEffect(() => {
    dispatch(getBanner());
  }, [dispatch]);
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  const renderImg = () => {
    return banner?.map((item, index) => {
      return (
        <div style={contentStyle} key={index}>
          <img
            src={item.hinhAnh}
            alt="slide1"
            className="w-[100vw] h-[600px]"
          />
        </div>
      );
    });
  };
  return <Carousel effect="fade" className="mt-[87px]">{renderImg()}</Carousel>;
};

export default CarouselHome;
