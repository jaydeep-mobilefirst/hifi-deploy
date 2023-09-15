import React from "react";
import GoogleLogo from "../assets/images/googleLogo.svg";
import Image from "next/image";

const GoogleButton = () => {
  return (
    <button className="w-[260px] sm:w-[334px] h-[42.49px] px-2 py-1 bg-white rounded-md border border-gray-400 flex-col justify-center items-center gap-2 inline-flex">
      <div className="py-[5px] justify-start items-start gap-5 inline-flex">
        <Image
          className="w-6 h-[24.49px] relative"
          src={GoogleLogo}
          alt="google_logo"
        />
        <div className="justify-start items-start gap-2.5 flex">
          <div className="text-gray-500 font-normal leading-normal">
            Sign in Using Google
          </div>
        </div>
      </div>
    </button>
  );
};

export default GoogleButton;
