import React from "react";

interface ButtonProps {
  buttonText: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ buttonText, disabled }) => {
  return (
    <button
      disabled={disabled}
      className={`w-[260px] sm:w-[334px] h-[32px] px-2 py-1 ${
        disabled ? "bg-[#B0BABF]" : "bg-indigo-900"
      } rounded-md flex flex-col justify-start items-center`}
    >
      <div className="self-stretch justify-center items-center gap-2 inline-flex">
        <div
          className={`text-poppins mt-1 grow shrink basis-0 text-center ${
            disabled ? "text-[#F9F9F7]" : "text-stone-50"
          } font-normal leading-normal`}
        >
          {buttonText}
        </div>
      </div>
    </button>
  );
};

export default Button;
