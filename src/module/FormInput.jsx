import React from "react";

const FormInput = (props) => {
  const {name,nameInput,value,ref,type} = props.propsInput
  return (
    <div className="mb-4 md:mr-2 md:mb-0">
      <label
        className="block mb-2 text-sm font-semibold text-gray-200"
        htmlFor={name}
      >
        {name}
      </label>
      <input
        ref={ref}
        className="w-full px-3 py-2 text-sm leading-tight text-gray-200 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={name}
        name={nameInput}
        value={value}
      />
    </div>
  );
};

export default FormInput;
