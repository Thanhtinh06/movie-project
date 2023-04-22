import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputForm from "./core/InputForm";
import { useForm } from "react-hook-form";
import { quanLyNguoiDungServices } from "../services/quanLyNguoiDung.services";
import { message } from "antd";
import { getInforUser } from "../store/quanLyNguoiDung/thunkActions";

const UserInfor = () => {
  const dispatch = useDispatch();
  const { inforAccount } = useSelector(
    (state) => state.quanLyNguoiDung
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const res = await quanLyNguoiDungServices.updateUser(data);
      if (res && res.data && res.data.statusCode !== 400) {
        message.success("Update account successful");
        dispatch(getInforUser());
      }
    } catch (error) {
      console.log(error);
      message.error("Update account fail");
    }
  };

  useEffect(() => {
    const fetchInforAccount = async () => {
      try {
        const res = await inforAccount;
        console.log(res)
        setValue("taiKhoan", res?.taiKhoan);
        setValue("hoTen", res?.hoTen);
        setValue("soDt", res?.soDT);
        setValue("email", res?.email);
        setValue("matKhau", res?.matKhau);
        setValue("maNhom", res?.maNhom);
        setValue("maLoaiNguoiDung", res?.maLoaiNguoiDung);
      } catch (error) {
        console.log(error);
      }
    };
    fetchInforAccount();
  }, [inforAccount, setValue]);

  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="w-[50%]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            {...register("taiKhoan", {
              required: "Please enter content",
              maxLength: {
                value: 20,
                message: "Username has maximum 20 characters",
              },
            })}
            label="User Name"
            type="text"
            isDisable={true}
            error={errors?.taiKhoan?.message}
          />
          <InputForm
            {...register("hoTen", {
              required: "Please enter content",
            })}
            label="Full Name"
            type="text"
            isDisable={false}
            error={errors?.hoTen?.message}
          />
          <InputForm
            {...register("soDt", {
              required: "Please enter content",
              maxLength: {
                value: 10,
                message: "Phone number have 10 digits",
              },
              minLength: {
                value: 10,
                message: "Phone number have 10 digits",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone must be number",
              },
            })}
            label="Phone Number"
            type="text"
            isDisable={false}
            error={errors?.soDt?.message}
          />
          <InputForm
            {...register("email", {
              required: "Please enter content",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Please enter correct format email",
              },
            })}
            label="Email"
            type="email"
            isDisable={true}
            error={errors?.email?.message}
          />
          <InputForm
            {...register("matKhau", {
              required: "Please enter content",
              pattern: {
                value:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                message: "Please enter correct format password",
              },
            })}
            label="Password"
            type="password"
            isDisable={false}
            error={errors?.matKhau?.message}
          />
          <InputForm
            {...register("maNhom", {
              required: "Please enter content",
            })}
            label="Code Group"
            type="text"
            isDisable={true}
            error={errors?.maNhom?.message}
          />
          <InputForm
            {...register("maLoaiNguoiDung", {
              required: "Please enter content",
            })}
            label="Kind"
            type="text"
            isDisable={true}
            error={errors?.maLoaiNguoiDung?.message}
          />
          <div className="m-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Account
            </button>
          </div>
        </form>
      </div>
      <div className="w-[50%] flex justify-center">
        <img
          className="rounded-lg w-[80%]"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default UserInfor;
