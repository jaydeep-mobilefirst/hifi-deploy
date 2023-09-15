import React, { InputHTMLAttributes, useState } from "react";
import { BiHide } from "react-icons/bi";
import { Field } from "formik";
import Eye from "../assets/images/eye.svg";
import Image from "next/image";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  name: string;
  id: string;
  password: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  type,
  name,
  id,
  password,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const handleOnClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="relative">
      <Field
        className="w-[260px] sm:w-[334px] h-[34px] px-1.5 pt-1 pb-1 bg-white rounded border border-gray-400 placeholder-gray-500"
        placeholder={placeholder}
        type={showPassword ? type : "text"}
        name={name}
        id={id}
        autoComplete="off"
      />
      {password && (
        <>
          {showPassword ? (
            <div
              onClick={handleOnClick}
              className="absolute mt-2 top-2 right-2 cursor-pointer flex items-center justify-center w-[18px] h-[18px] rounded-lg bg-cover"
              style={{
                backgroundImage: `url(${showPassword ? Eye : null})`,
              }}
            ><Image src={Eye} alt="eye" /></div>
          ) : (
            <div
              onClick={handleOnClick}
              className="absolute top-2 mt-2 right-2 cursor-pointer flex items-center justify-center w-[18px] h-[18px] rounded-lg bg-cover"
            >
              <BiHide />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TextInput;
