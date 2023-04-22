import clsx from "clsx";
import React from "react";

const InputForm = React.forwardRef((props, ref) => {
  const { label, error, isDisable, type, ...rest} = props;
  return (
    <div className="mb-4 md:mr-2 md:mb-0">
      <label className="block mb-2 text-sm font-semibold text-neutral-500">
        {label}
      </label>
      <input
        {...rest}
        ref={ref}
        className={clsx(
          "w-full px-3 py-2 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline text-zinc-700",
          {
            disabled: isDisable ? true : false,
          }
        )}
        disabled={isDisable}
        type={type}
      />
      <p className="text-sm italic text-red-500 mt-3">{error && error}</p>
    </div>
  );
});

export default InputForm;

