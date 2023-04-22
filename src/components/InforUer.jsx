import React from "react";
import { useSelector } from "react-redux";
import FormInput from "../module/FormInput";

const InforUer = () => {
  const { user } = useSelector((state) => state.quanLyNguoiDung);

  return (
    <div className="flex flex-row gap-4 items-center">
      <div className="w-[50%]">
        <form>
          <FormInput
            propsInput={{
              isDisable: true,
              value: user?.taiKhoan,
              nameTag: "User Name",
              nameInput: "taiKhoan",
              type: "text",
              condition: {
                required: "Please enter content",
                maxLength: {
                  value: 20,
                  message: "Username has maximum 20 characters",
                },
              },
            }}
          />
          <FormInput
            propsInput={{
              isDisable: false,
              value: "******",
              nameTag: "Password",
              nameInput: "matKhau",
              type: "password",
              condition: {
                required: "Please enter content",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                  message: "Please enter correct format password",
                },
              },
            }}
          />
          <FormInput
            propsInput={{
              isDisable: false,
              value: user?.hoTen,
              nameTag: "Full Name",
              nameInput: "hoTen",
              type: "text",
              condition: {
                required: "Please enter content",
              },
            }}
          />
          <FormInput
            propsInput={{
              isDisable: true,
              value: user?.email,
              nameTag: "Email",
              nameInput: "email",
              type: "email",
              condition: {
                required: "Please enter content",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Please enter correct format email",
                },
              },
            }}
          />
          <FormInput
            propsInput={{
              isDisable: false,
              value: user?.soDT,
              nameTag: "Phone",
              nameInput: "soDt",
              type: "text",
              condition: {
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
              },
            }}
          />
          <FormInput
            propsInput={{
              isDisable: true,
              value: user?.maNhom,
              nameTag: "Code Group",
              nameInput: "maNhom",
              type: "text",
              condition: {
                required: "Please enter content",
              },
            }}
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

export default InforUer;
