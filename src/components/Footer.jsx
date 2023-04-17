import React from "react";
import "../css/index.css";
import TheateLogo from "../module/TheateLogo";
const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
        <div className="footer-content">
          <div className="nav-footer">
            <ul>
              <li className="text-footer">Movie</li>
              <li>Brands</li>
              <li>Guiline</li>
            </ul>
          </div>
          <div className="policy">
            <ul>
              <li>Policy</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <div className="brands text-footer ">Partner</div>
            <div className="logo">
              <TheateLogo valueClass={"flex flex-row flex-wrap justify-between items-center"} valueWidth={"w-[45px]"} />
            </div>
          </div>
          <div className="mobile-app">
            <div className="text-footer">Mobile app</div>
            <div className="icon">
              <i className="fa-brands fa-apple" />
              <i className="fa-brands fa-android" />
            </div>
          </div>
          <div className="social">
            <div className="text-footer">Social</div>
            <div className="icon">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-line" />
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="flex flex-row justify-between">
          <img src="../logo2.jpeg" alt="..." className="w-[70px] h-[70px]" />
          <p className="text-[13px] ">
            Movie - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN SUNEL <br />
            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
            Minh, Việt Nam.
            <br />
            Giấy chứng nhận đăng ký kinh doanh số: 0123123121,
            <br />
            Đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
            hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            <br />
            Số Điện Thoại (Hotline): 1900 545 436 <br />
            Email: support@movie.vn
          </p>
          <img src="../certificate.png" alt="..." className="w-[100px] h-[50px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
