import { createSlice } from "@reduxjs/toolkit";
import {
  getTheaterList,
  getTheaterGroup,
} from "./thunkAction";

const initialState = {
  theateList: [],
  theateGroup: [
    {
        "danhSachPhim": [
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44139,
                        "maRap": "905",
                        "tenRap": "Rạp 5",
                        "ngayChieuGioChieu": "2021-08-17T09:40:00",
                        "giaVe": 90000
                    },
                    {
                        "maLichChieu": 44140,
                        "maRap": "909",
                        "tenRap": "Rạp 9",
                        "ngayChieuGioChieu": "2021-08-17T10:00:00",
                        "giaVe": 90000
                    },
                    {
                        "maLichChieu": 44141,
                        "maRap": "906",
                        "tenRap": "Rạp 6",
                        "ngayChieuGioChieu": "2021-08-18T10:00:00",
                        "giaVe": 80000
                    }
                ],
                "maPhim": 1326,
                "tenPhim": "Ted 2",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ted-2_gp13.jpg",
                "hot": true,
                "dangChieu": true,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44467,
                        "maRap": "906",
                        "tenRap": "Rạp 6",
                        "ngayChieuGioChieu": "2021-10-21T02:00:19",
                        "giaVe": 75000
                    }
                ],
                "maPhim": 1506,
                "tenPhim": "Southpaww 696",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/southpaw.jpg",
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 45351,
                        "maRap": "906",
                        "tenRap": "Rạp 6",
                        "ngayChieuGioChieu": "2022-09-14T12:04:04",
                        "giaVe": 90000
                    }
                ],
                "maPhim": 8058,
                "tenPhim": "The Eternals",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-eternals_gp13.jpg",
                "hot": true,
                "dangChieu": false,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 45783,
                        "maRap": "906",
                        "tenRap": "Rạp 6",
                        "ngayChieuGioChieu": "2022-11-07T12:00:04",
                        "giaVe": 75000
                    }
                ],
                "maPhim": 8189,
                "tenPhim": "Lừa đểu gặp lừa đảo 2",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-dao-3_gp13.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 45337,
                        "maRap": "901",
                        "tenRap": "Rạp 1",
                        "ngayChieuGioChieu": "2022-09-18T09:09:20",
                        "giaVe": 90000
                    }
                ],
                "maPhim": 8195,
                "tenPhim": "Jurassic World",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/jurassic-world_gp13.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44769,
                        "maRap": "903",
                        "tenRap": "Rạp 3",
                        "ngayChieuGioChieu": "2022-05-08T01:04:32",
                        "giaVe": 85000
                    }
                ],
                "maPhim": 8922,
                "tenPhim": "Maika: Cô Bé Đến Từ Hành Tinh Khác",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/maika-co-be-den-tu-hanh-tinh-khac_gp13.jpeg",
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44777,
                        "maRap": "909",
                        "tenRap": "Rạp 9",
                        "ngayChieuGioChieu": "2022-05-06T06:06:30",
                        "giaVe": 90000
                    },
                    {
                        "maLichChieu": 44789,
                        "maRap": "908",
                        "tenRap": "Rạp 8",
                        "ngayChieuGioChieu": "2022-05-10T05:08:59",
                        "giaVe": 85000
                    }
                ],
                "maPhim": 8923,
                "tenPhim": "Án mạng liên hoàn lúc nửa đêm",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/an-mang-lien-hoan-luc-nua-dem_gp13.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44795,
                        "maRap": "906",
                        "tenRap": "Rạp 6",
                        "ngayChieuGioChieu": "2022-05-08T01:17:46",
                        "giaVe": 80000
                    }
                ],
                "maPhim": 8924,
                "tenPhim": "Thỏ gà rà kho báu",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tho-ga-ra-kho-bau_gp13.jpg",
                "hot": false,
                "dangChieu": false,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44822,
                        "maRap": "906",
                        "tenRap": "Rạp 6",
                        "ngayChieuGioChieu": "2022-05-08T01:21:30",
                        "giaVe": 85000
                    }
                ],
                "maPhim": 8925,
                "tenPhim": "Chuyện ma đô thị",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/chuyen-ma-do-thi_gp13.jpg",
                "hot": false,
                "dangChieu": false,
                "sapChieu": true
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44840,
                        "maRap": "908",
                        "tenRap": "Rạp 8",
                        "ngayChieuGioChieu": "2022-05-08T01:31:45",
                        "giaVe": 105000
                    }
                ],
                "maPhim": 8926,
                "tenPhim": "Khởi nguồn đại dịch",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/khoi-nguon-dai-dich_gp13.jpeg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44854,
                        "maRap": "908",
                        "tenRap": "Rạp 8",
                        "ngayChieuGioChieu": "2022-05-08T01:33:20",
                        "giaVe": 75000
                    }
                ],
                "maPhim": 8927,
                "tenPhim": "Ngày 24...",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ngay-24-_gp13.jpg",
                "hot": true,
                "dangChieu": false,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44865,
                        "maRap": "909",
                        "tenRap": "Rạp 9",
                        "ngayChieuGioChieu": "2022-05-08T10:56:24",
                        "giaVe": 75000
                    }
                ],
                "maPhim": 8964,
                "tenPhim": "Nobita và cuộc chiến vũ trụ tí hon",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/nobita-va-cuoc-chien-vu-tru-ti-hon_gp13.jpg",
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44870,
                        "maRap": "901",
                        "tenRap": "Rạp 1",
                        "ngayChieuGioChieu": "2022-05-08T10:57:25",
                        "giaVe": 80000
                    }
                ],
                "maPhim": 8965,
                "tenPhim": "Điện thoại đen",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/dien-thoai-den_gp13.jpg",
                "hot": false,
                "dangChieu": false,
                "sapChieu": true
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44880,
                        "maRap": "910",
                        "tenRap": "Rạp 10",
                        "ngayChieuGioChieu": "2022-05-08T10:59:08",
                        "giaVe": 75000
                    }
                ],
                "maPhim": 8966,
                "tenPhim": "Minions: Sự trỗi dậy của Gru",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/minions-su-troi-day-cua-gru_gp13.jpg",
                "hot": false,
                "dangChieu": false,
                "sapChieu": true
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44903,
                        "maRap": "907",
                        "tenRap": "Rạp 7",
                        "ngayChieuGioChieu": "2022-05-08T11:01:50",
                        "giaVe": 75000
                    }
                ],
                "maPhim": 8968,
                "tenPhim": "Thor: Tình yêu và sấm sét",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/thor-tinh-yeu-va-sam-set_gp13.jpg",
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44918,
                        "maRap": "908",
                        "tenRap": "Rạp 8",
                        "ngayChieuGioChieu": "2022-05-08T11:03:30",
                        "giaVe": 75000
                    }
                ],
                "maPhim": 8969,
                "tenPhim": "Bản tin chết",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ban-tin-chet_gp13.jpg",
                "hot": false,
                "dangChieu": false,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44931,
                        "maRap": "908",
                        "tenRap": "Rạp 8",
                        "ngayChieuGioChieu": "2022-05-08T11:12:25",
                        "giaVe": 105000
                    }
                ],
                "maPhim": 8970,
                "tenPhim": "Phi công siêu đẳng Maverick",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/phi-cong-sieu-dang-maverick_gp13.jpg",
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44943,
                        "maRap": "905",
                        "tenRap": "Rạp 5",
                        "ngayChieuGioChieu": "2022-05-08T11:13:52",
                        "giaVe": 75000
                    },
                    {
                        "maLichChieu": 44944,
                        "maRap": "901",
                        "tenRap": "Rạp 1",
                        "ngayChieuGioChieu": "2026-09-30T06:16:11",
                        "giaVe": 105000
                    }
                ],
                "maPhim": 8971,
                "tenPhim": "Mèo đi hia: Điều ước cuối cùng",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/meo-di-hia-dieu-uoc-cuoi-cung_gp13.png",
                "hot": true,
                "dangChieu": false,
                "sapChieu": true
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44966,
                        "maRap": "910",
                        "tenRap": "Rạp 10",
                        "ngayChieuGioChieu": "2022-05-10T12:14:09",
                        "giaVe": 75000
                    }
                ],
                "maPhim": 9013,
                "tenPhim": "Avatar 2: The way of water",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avatar-2-the-way-of-water_gp13.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 44979,
                        "maRap": "908",
                        "tenRap": "Rạp 8",
                        "ngayChieuGioChieu": "2022-05-10T12:15:46",
                        "giaVe": 75000
                    }
                ],
                "maPhim": 9014,
                "tenPhim": "Black Adam",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/black-adam_gp13.jpeg",
                "hot": true,
                "dangChieu": false,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 45051,
                        "maRap": "904",
                        "tenRap": "Rạp 4",
                        "ngayChieuGioChieu": "2022-06-25T09:32:34",
                        "giaVe": 75000
                    }
                ],
                "maPhim": 9174,
                "tenPhim": "Cruella",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/cruella_gp13.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 45693,
                        "maRap": "905",
                        "tenRap": "Rạp 5",
                        "ngayChieuGioChieu": "2022-10-16T05:01:00",
                        "giaVe": 100000
                    }
                ],
                "maPhim": 10651,
                "tenPhim": "Đặc vụ xuyên quốc gia 10",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/dac-vu-xuyen-quoc-gia-10_gp13.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 45719,
                        "maRap": "902",
                        "tenRap": "Rạp 2",
                        "ngayChieuGioChieu": "2022-11-27T09:50:00",
                        "giaVe": 75000
                    }
                ],
                "maPhim": 10727,
                "tenPhim": "Ấn quỷ 888",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/an-quy-2222_gp13.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 46630,
                        "maRap": "910",
                        "tenRap": "Rạp 10",
                        "ngayChieuGioChieu": "2023-04-01T20:30:53",
                        "giaVe": 80000
                    }
                ],
                "maPhim": 12038,
                "tenPhim": "Ant-Man and the Wasp",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ant-man-and-the-wasp-quantumania_gp13.jpg",
                "hot": false,
                "dangChieu": true,
                "sapChieu": false
            },
            {
                "lstLichChieuTheoPhim": [
                    {
                        "maLichChieu": 46639,
                        "maRap": "905",
                        "tenRap": "Rạp 5",
                        "ngayChieuGioChieu": "2023-03-30T20:30:34",
                        "giaVe": 80000
                    }
                ],
                "maPhim": 12046,
                "tenPhim": "The Last of Us",
                "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-last-of-us_gp13.jpg",
                "hot": true,
                "dangChieu": true,
                "sapChieu": false
            }
        ],
        "maCumRap": "megags-cao-thang",
        "tenCumRap": "MegaGS - Cao Thắng",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "19 Cao Thắng, Q.3"
    }
],
  movieSchedule: [],
};

export const {
  reducer: quanLyRapReducer,
  actions: quanLyRapActions,
} = createSlice({
  name: "quanLyRap",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTheaterList.fulfilled, (state, action) => {
        state.theateList = action.payload;
      })
      .addCase(getTheaterGroup.fulfilled, (state, action) => {
        state.theateGroup = action.payload.lstCumRap;
        console.log(state.theateGroup);
      })
  },
});
