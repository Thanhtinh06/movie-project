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
                "maLichChieu": 16423,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16424,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16425,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16426,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16427,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16428,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16471,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16472,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16473,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16474,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16475,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16476,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16465,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16466,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16467,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16468,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16469,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16470,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16459,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16460,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16461,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16462,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16463,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16464,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16453,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16454,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16455,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16456,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16457,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16458,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16447,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16448,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16449,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16450,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16451,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16452,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16441,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16442,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16443,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16444,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16445,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16446,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16435,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16436,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16437,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16438,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16439,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16440,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16429,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16430,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16431,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16432,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16433,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 16434,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T20:10:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1320,
            "tenPhim": "Ad Astra 3",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ad-astra_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45286,
                "maRap": "472",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2022-09-07T22:22:00",
                "giaVe": 80000
              }
            ],
            "maPhim": 9813,
            "tenPhim": "Phim hai mặt",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ten_gp07.jpg",
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45429,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2022-08-20T09:30:00",
                "giaVe": 90000
              },
              {
                "maLichChieu": 45433,
                "maRap": "471",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2022-08-20T09:30:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 10171,
            "tenPhim": "khách sạn ma quái ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/khach-san-ma-quai_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46305,
                "maRap": "473",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2023-02-07T12:40:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11388,
            "tenPhim": "STRANGE WORLD",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/strange-world_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          }
        ],
        "maCumRap": "bhd-star-cineplex-pham-hung",
        "tenCumRap": "BHD Star Cineplex - Phạm Hùng",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh"
      },
      {
        "danhSachPhim": [
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 17233,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-01T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17234,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-01T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17235,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-01T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17236,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-01T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17237,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-01T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17238,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-01T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17281,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-09T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17282,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-09T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17283,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-09T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17284,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-09T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17285,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-09T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17286,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-09T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17275,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-08T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17276,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-08T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17277,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-08T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17278,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-08T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17279,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-08T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17280,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-08T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17269,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-07T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17270,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-07T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17271,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-07T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17272,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-07T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17273,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-07T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17274,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-07T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17263,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-06T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17264,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-06T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17265,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-06T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17266,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-06T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17267,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-06T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17268,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-06T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17257,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-05T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17258,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-05T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17259,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-05T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17260,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-05T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17261,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-05T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17262,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-05T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17251,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-04T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17252,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-04T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17253,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-04T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17254,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-04T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17255,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-04T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17256,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-04T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17245,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-03T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17246,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-03T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17247,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-03T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17248,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-03T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17249,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-03T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17250,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-03T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17239,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-02T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17240,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-02T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17241,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-02T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17242,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-02T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17243,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-02T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 17244,
                "maRap": "488",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2019-01-02T20:10:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1335,
            "tenPhim": "The Secret Garden 1",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/the-secret-garden-1_gp07.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          }
        ],
        "maCumRap": "bhd-star-cineplex-vincom-le-van-viet",
        "tenCumRap": "BHD Star Cineplex - Vincom Lê Văn Việt",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "L4-Vincom Plaza, 50 Lê Văn Việt, Q.9"
      },
      {
        "danhSachPhim": [
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 18043,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18044,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18045,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18046,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18047,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18048,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-01T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18091,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18092,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18093,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18094,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18095,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18096,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-09T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18085,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18086,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18087,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18088,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18089,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18090,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-08T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18079,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18080,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18081,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18082,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18083,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18084,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-07T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18073,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18074,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18075,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18076,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18077,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18078,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-06T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18067,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18068,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18069,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18070,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18071,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18072,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-05T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18061,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18062,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18063,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18064,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18065,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18066,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-04T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18055,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18056,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18057,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18058,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18059,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18060,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-03T20:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18049,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T10:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18050,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T12:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18051,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T14:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18052,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T16:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18053,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T18:10:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 18054,
                "maRap": "503",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2019-01-02T20:10:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 1350,
            "tenPhim": "Hạnh phúc mãi về sau",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/hanh-phuc-mai-ve-sau_gp03.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46247,
                "maRap": "507",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2022-12-24T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11353,
            "tenPhim": "Tử Tù Hồi Sinh",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tu-tu-hoi-sinh_gp07.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46306,
                "maRap": "508",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2023-01-14T10:45:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11388,
            "tenPhim": "STRANGE WORLD",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/strange-world_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          }
        ],
        "maCumRap": "bhd-star-cineplex-vincom-thao-dien",
        "tenCumRap": "BHD Star Cineplex - Vincom Thảo Điền",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "L5-Megamall, 159 XL Hà Nội, Q.2"
      },
      {
        "danhSachPhim": [
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45247,
                "maRap": "460",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2022-08-01T11:54:04",
                "giaVe": 100000
              }
            ],
            "maPhim": 1380,
            "tenPhim": "Raya",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/raya_gp07.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45444,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2022-09-24T01:30:53",
                "giaVe": 75000
              },
              {
                "maLichChieu": 45447,
                "maRap": "455",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-09-24T01:45:14",
                "giaVe": 75000
              },
              {
                "maLichChieu": 45448,
                "maRap": "457",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2022-09-10T02:00:15",
                "giaVe": 75000
              },
              {
                "maLichChieu": 45449,
                "maRap": "456",
                "tenRap": "Rạp 6",
                "ngayChieuGioChieu": "2022-09-11T01:00:51",
                "giaVe": 75000
              },
              {
                "maLichChieu": 45479,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2022-09-30T03:05:34",
                "giaVe": 75000
              }
            ],
            "maPhim": 9990,
            "tenPhim": "New Movie",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/new-movie_gp07.jpeg",
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45436,
                "maRap": "451",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2022-09-30T08:20:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 10171,
            "tenPhim": "khách sạn ma quái ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/khach-san-ma-quai_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45471,
                "maRap": "453",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2022-09-29T20:05:00",
                "giaVe": 89000
              }
            ],
            "maPhim": 10249,
            "tenPhim": "BBBBBBB",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/bbbbbbb_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46255,
                "maRap": "457",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2022-12-31T08:30:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11351,
            "tenPhim": "AINBO: Nữ Chiến Binh Amazon",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ainbo-nu-chien-binh-amazon_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46267,
                "maRap": "460",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2022-12-27T06:15:00",
                "giaVe": 85000
              },
              {
                "maLichChieu": 46268,
                "maRap": "453",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2022-12-27T10:30:00",
                "giaVe": 85000
              }
            ],
            "maPhim": 11358,
            "tenPhim": "Hố Tử Thần ( Chiếu Lại )",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ho-tu-than-chieu-lai-_gp07.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46303,
                "maRap": "454",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2022-12-31T11:00:00",
                "giaVe": 85000
              }
            ],
            "maPhim": 11388,
            "tenPhim": "STRANGE WORLD",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/strange-world_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46595,
                "maRap": "458",
                "tenRap": "Rạp 8",
                "ngayChieuGioChieu": "2023-03-20T00:00:00",
                "giaVe": 90000
              }
            ],
            "maPhim": 11973,
            "tenPhim": "Chiến binh Báo Đen: Wakanda Forever!",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/chien-binh-bao-den-wakanda-bat-diet-_gp07.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46610,
                "maRap": "454",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2023-03-25T00:00:00",
                "giaVe": 80000
              }
            ],
            "maPhim": 12011,
            "tenPhim": "Avengers: Endgame",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avengers-endgame_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          }
        ],
        "maCumRap": "bhd-star-cineplex-3-2",
        "tenCumRap": "BHD Star Cineplex - 3/2",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "L5-Vincom 3/2, 3C Đường 3/2, Q.10"
      },
      {
        "danhSachPhim": [
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 45280,
                "maRap": "463",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2022-09-07T23:59:00",
                "giaVe": 80000
              },
              {
                "maLichChieu": 45309,
                "maRap": "463",
                "tenRap": "Rạp 3",
                "ngayChieuGioChieu": "2022-09-30T03:00:00",
                "giaVe": 100000
              }
            ],
            "maPhim": 9813,
            "tenPhim": "Phim hai mặt",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ten_gp07.jpg",
            "hot": false,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46254,
                "maRap": "467",
                "tenRap": "Rạp 7",
                "ngayChieuGioChieu": "2023-01-04T06:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11351,
            "tenPhim": "AINBO: Nữ Chiến Binh Amazon",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ainbo-nu-chien-binh-amazon_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46244,
                "maRap": "469",
                "tenRap": "Rạp 9",
                "ngayChieuGioChieu": "2022-12-24T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11353,
            "tenPhim": "Tử Tù Hồi Sinh",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tu-tu-hoi-sinh_gp07.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46269,
                "maRap": "466",
                "tenRap": "Rạp 6",
                "ngayChieuGioChieu": "2022-12-25T10:15:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 46270,
                "maRap": "464",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2022-12-27T04:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 46271,
                "maRap": "470",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2022-12-27T04:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 46272,
                "maRap": "465",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-12-30T08:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 46273,
                "maRap": "462",
                "tenRap": "Rạp 2",
                "ngayChieuGioChieu": "2022-12-31T10:30:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11359,
            "tenPhim": "Hung Thủ Vô Hình",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/hung-thu-vo-hinh_gp07.jpg",
            "hot": false,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46283,
                "maRap": "465",
                "tenRap": "Rạp 5",
                "ngayChieuGioChieu": "2022-12-31T06:30:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11364,
            "tenPhim": "GANGNAM Thất Thủ",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/gangnam-that-thu_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          }
        ],
        "maCumRap": "bhd-star-cineplex-bitexco",
        "tenCumRap": "BHD Star Cineplex - Bitexco",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "L3-Bitexco Icon 68, 2 Hải Triều, Q.1"
      },
      {
        "danhSachPhim": [
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46246,
                "maRap": "494",
                "tenRap": "Rạp 4",
                "ngayChieuGioChieu": "2022-12-24T12:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11353,
            "tenPhim": "Tử Tù Hồi Sinh",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/tu-tu-hoi-sinh_gp07.jpg",
            "hot": true,
            "dangChieu": false,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46256,
                "maRap": "499",
                "tenRap": "Rạp 9",
                "ngayChieuGioChieu": "2022-12-26T10:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 46257,
                "maRap": "491",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2022-12-27T06:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 46258,
                "maRap": "500",
                "tenRap": "Rạp 10",
                "ngayChieuGioChieu": "2022-12-27T06:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11354,
            "tenPhim": "AVATAR: Dòng Chảy Của Nước",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/avatar-dong-chay-cua-nuoc_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46262,
                "maRap": "499",
                "tenRap": "Rạp 9",
                "ngayChieuGioChieu": "2022-12-26T08:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 46263,
                "maRap": "499",
                "tenRap": "Rạp 9",
                "ngayChieuGioChieu": "2022-12-27T10:00:00",
                "giaVe": 75000
              },
              {
                "maLichChieu": 46264,
                "maRap": "491",
                "tenRap": "Rạp 1",
                "ngayChieuGioChieu": "2022-12-28T11:30:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11357,
            "tenPhim": "Đảo Độc Đắc",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/dao-doc-dac_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": true
          },
          {
            "lstLichChieuTheoPhim": [
              {
                "maLichChieu": 46307,
                "maRap": "499",
                "tenRap": "Rạp 9",
                "ngayChieuGioChieu": "2023-01-02T10:00:00",
                "giaVe": 75000
              }
            ],
            "maPhim": 11388,
            "tenPhim": "STRANGE WORLD",
            "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/strange-world_gp07.jpg",
            "hot": true,
            "dangChieu": true,
            "sapChieu": false
          }
        ],
        "maCumRap": "bhd-star-cineplex-vincom-quang-trung",
        "tenCumRap": "BHD Star Cineplex - Vincom Quang Trung",
        "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
        "diaChi": "B1-Vincom QT, 190 Quang Trung, Gò Vấp"
      }
    ],
  movieSchedule: {

      "danhSachPhim": [
          {
              "lstLichChieuTheoPhim": [
                  {
                      "maLichChieu": 16423,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-01T10:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16424,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-01T12:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16425,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-01T14:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16426,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-01T16:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16427,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-01T18:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16428,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-01T20:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16471,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-09T10:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16472,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-09T12:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16473,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-09T14:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16474,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-09T16:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16475,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-09T18:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16476,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-09T20:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16465,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-08T10:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16466,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-08T12:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16467,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-08T14:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16468,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-08T16:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16469,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-08T18:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16470,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-08T20:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16459,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-07T10:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16460,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-07T12:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16461,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-07T14:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16462,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-07T16:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16463,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-07T18:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16464,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-07T20:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16453,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-06T10:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16454,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-06T12:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16455,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-06T14:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16456,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-06T16:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16457,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-06T18:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16458,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-06T20:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16447,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-05T10:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16448,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-05T12:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16449,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-05T14:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16450,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-05T16:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16451,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-05T18:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16452,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-05T20:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16441,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-04T10:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16442,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-04T12:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16443,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-04T14:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16444,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-04T16:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16445,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-04T18:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16446,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-04T20:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16435,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-03T10:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16436,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-03T12:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16437,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-03T14:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16438,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-03T16:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16439,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-03T18:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16440,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-03T20:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16429,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-02T10:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16430,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-02T12:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16431,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-02T14:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16432,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-02T16:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16433,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-02T18:10:00",
                      "giaVe": 75000
                  },
                  {
                      "maLichChieu": 16434,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2019-01-02T20:10:00",
                      "giaVe": 75000
                  }
              ],
              "maPhim": 1320,
              "tenPhim": "Ad Astra 3",
              "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ad-astra_gp07.jpg",
              "hot": true,
              "dangChieu": true,
              "sapChieu": true
          },
          {
              "lstLichChieuTheoPhim": [
                  {
                      "maLichChieu": 45286,
                      "maRap": "472",
                      "tenRap": "Rạp 2",
                      "ngayChieuGioChieu": "2022-09-07T22:22:00",
                      "giaVe": 80000
                  }
              ],
              "maPhim": 9813,
              "tenPhim": "Phim hai mặt",
              "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/ten_gp07.jpg",
              "hot": false,
              "dangChieu": false,
              "sapChieu": true
          },
          {
              "lstLichChieuTheoPhim": [
                  {
                      "maLichChieu": 45429,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2022-08-20T09:30:00",
                      "giaVe": 90000
                  },
                  {
                      "maLichChieu": 45433,
                      "maRap": "471",
                      "tenRap": "Rạp 1",
                      "ngayChieuGioChieu": "2022-08-20T09:30:00",
                      "giaVe": 90000
                  }
              ],
              "maPhim": 10171,
              "tenPhim": "khách sạn ma quái ",
              "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/khach-san-ma-quai_gp07.jpg",
              "hot": true,
              "dangChieu": true,
              "sapChieu": true
          },
          {
              "lstLichChieuTheoPhim": [
                  {
                      "maLichChieu": 46305,
                      "maRap": "473",
                      "tenRap": "Rạp 3",
                      "ngayChieuGioChieu": "2023-02-07T12:40:00",
                      "giaVe": 75000
                  }
              ],
              "maPhim": 11388,
              "tenPhim": "STRANGE WORLD",
              "hinhAnh": "https://movienew.cybersoft.edu.vn/hinhanh/strange-world_gp07.jpg",
              "hot": true,
              "dangChieu": true,
              "sapChieu": false
          }
      ],
      "maCumRap": "bhd-star-cineplex-pham-hung",
      "tenCumRap": "BHD Star Cineplex - Phạm Hùng",
      "hinhAnh": "https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png",
      "diaChi": "L4-Satra Phạm Hùng, C6/27 Phạm Hùng, Bình Chánh"
  },
};

export const {
  reducer: quanLyRapReducer,
  actions: quanLyRapActions,
} = createSlice({
  name: "quanLyRap",
  initialState,
  reducers: {
    updateSchedule : (state,action) => {
      state.movieSchedule = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTheaterList.fulfilled, (state, action) => {
        state.theateList = action.payload;
      })
      .addCase(getTheaterGroup.fulfilled, (state, action) => {
        if (action.payload) {
          state.theateGroup = action.payload.lstCumRap;
          state.movieSchedule = action.payload.lstCumRap[0]
        }
      })
      
  },
});
