import React from "react";
import Logo from "../../assets/images/hifiLogo.svg";
import TextLogo from "../../assets/images/textLogo.svg";

const LogoApp = () => {
  return (
    <div className="flex items-center justify-start">
      <div>
        <img className="w-[41px] h-[41px]" src={Logo} alt="hifi_logo" />
      </div>
      <div className="ml-1 md:ml-[13px]">
        <img
          className="w-[162px] h-[41px] mt-2"
          src={TextLogo}
          alt="hifi pay"
        />
      </div>
    </div>
  );
};

export default LogoApp;
