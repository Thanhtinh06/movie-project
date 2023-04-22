import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { quanLyNguoiDungServices } from "../services/quanLyNguoiDung.services";
import { message } from "antd";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange'
  });

  return (
    <section className="bg-black w-[100vw] h-[100vh]">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 py-12 ">
          {/* Row */}
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg shadow-gray-600">
            {/* Col */}
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style={{
                backgroundImage:
                  'url("https://lumiere-a.akamaihd.net/v1/images/avatar-wayofwater-en_a56a9e95.jpeg")',
              }}
            />
            {/* Col */}
            <div className="w-full lg:w-7/12 bg-neutral-700 p-5 rounded-lg lg:rounded-l-none ">
              <h3 className="pt-4 text-2xl text-center text-indigo-500 font-extrabold uppercase">
                Create an Account!
              </h3>
              <form
                className="px-8 pt-6 pb-8 mb-4 bg-neutral-700 rounded"
                onSubmit={handleSubmit(async(value,e) => {
                  try {
                    const res = await quanLyNguoiDungServices.registerUser(value)
                    console.log(res);
                    if (res && res.data && res.data.statusCode !== 400) {
                      message.success('Register account successful');
                      navigate('/login');
                    }
                  } catch (error) {
                    // message.error('Register account fail')
                    console.log(error)
                  }
                })}
              >
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label
                      className="block mb-2 text-sm font-semibold text-gray-200"
                      htmlFor="userName"
                    >
                      Username
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="userName"
                      type="text"
                      placeholder="User Name"
                      name="taiKhoan"
                      {...register("taiKhoan", {
                        required: "Please enter content",
                        maxLength:{
                          value: 20,
                          message: 'Username has maximum 20 characters'
                        }
                      })}
                    />
                    <p className="text-sm italic text-red-500 mt-3">
                      {errors?.taiKhoan?.message}
                    </p>
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-semibold text-gray-200"
                      htmlFor="code"
                    >
                      Code Group
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="code"
                      type="text"
                      placeholder="GP00"
                      name="maNhom"
                      {...register("maNhom",{
                        required: "Please enter content",
                      })}
                      
                    />
                    <p className="text-sm italic text-red-500 mt-3">
                      {errors?.maNhom?.message}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-semibold text-gray-200"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="text"
                    type="text"
                    placeholder="FullName"
                    name="hoTen"
                    {...register("hoTen",{
                      required: "Please enter content",
                    })}
                  />
                  <p className="text-sm italic text-red-500 mt-3">
                      {errors?.hoTen?.message}
                    </p>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-semibold text-gray-200"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    {...register("email",{
                      required: "Please enter content",
                      pattern:{
                        value : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message:'Please enter correct format email'
                      }
                    })}
                  />
                  <p className="text-sm italic text-red-500 mt-3">
                      {errors?.email?.message}
                    </p>
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-semibold text-gray-200"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    name="soDt"
                    {...register("soDt",{
                      required: "Please enter content",
                      maxLength :{
                        value:10,
                        message: "Phone number have 10 digits"
                      },
                      minLength :{
                        value:10,
                        message: "Phone number have 10 digits"
                      },
                      pattern : {
                        value : /^[0-9]+$/,
                        message : 'Phone must be number'
                        
                      }
                    })}
                  />
                  <p className="text-sm italic text-red-500 mt-3">
                      {errors?.soDt?.message}
                    </p>
                </div>

                <div className="mb-4">
                  <label
                    className="block mb-2 text-sm font-semibold text-gray-200"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    name="matKhau"
                    {...register("matKhau",{
                      required: "Please enter content",
                      pattern : {
                        value : /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
                        message: 'Please enter correct format password'
                      }
                    })}
                  />
                  <p className="text-sm italic text-red-500 mt-3">
                    {errors?.matKhau?.message}
                  </p>
                </div>
                <div className="m-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
                  <p
                    className="inline-block text-sm text-indigo-500 align-baseline hover:text-blue-800 cursor-pointer"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Already have an account? Login!
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
