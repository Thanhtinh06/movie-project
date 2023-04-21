import clsx from "clsx";
import React from "react";
import { useForm } from "react-hook-form";

const FormInput = (props) => {
  const { nameTag, nameInput, type, condition, value, isDisable } =
    props.propsInput;
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  return (
    <div className="mb-4 md:mr-2 md:mb-0">
      <label
        className="block mb-2 text-sm font-semibold text-neutral-500"
        htmlFor={nameTag}
      >
        {nameTag}
      </label>
      <input
        className={clsx("w-full px-3 py-2 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-zinc-700",{
          disabled : isDisable ? true : false,

        })}
        id={nameTag}
        type={type}
        placeholder="User Name"
        name={nameInput}
        {...register(nameInput, { condition })}
        value={value}
        disabled={isDisable}
      />
      <p className="text-sm italic text-red-500 mt-3">
        {errors?.nameInput?.message}
      </p>
    </div>
  );
};

export default FormInput;
