import React, { useState } from "react";
import "./styles.css";
import GoogleButton from "../../components/auth/GoogleButton";
import TextInput from "../../components/auth/TextInput";
import Button from "../../components/auth/Button";
import LogoApp from "../../components/auth/LogoApp";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AutoSubmitToken from "../../components/auth/AutoSubmitToken";
import { useNavigate, Link } from "react-router-dom";

interface loginFormValues {
  email: string;
  password: string;
}

const Signin = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<any>();

  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const signInValidationSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = async (values: loginFormValues) => {
    setLoader(true);
    navigate("/auth-code");
    setLoader(false);
  };
  return (
    <div className="bg-image min-h-screen p-6 md:p-10 flex items-center justify-center">
      <div className="m-4 min-w-[310px] max-w-[452px] h-auto py-6 px-6 md:py-[50px] md:px-[59px] flex items-center justify-center flex-col rounded-2xl bg-[#F9F9F7] border-[#373389] border-[1px]">
        <div>
          <LogoApp />
        </div>
        <div className="text-nunito mt-[16px] md:mt-[40px] text-center text-neutral-900 text-[23px] font-semibold">
          Welcome
        </div>
        <div className="text-nunito mt-[8px] md:mt-[20px] text-center text-neutral-900 text-[23px] font-semibold">
          Sign in to HIFI Pay
        </div>
        <div className="mt-[16px] md:mt-[40px]">
          <GoogleButton />
        </div>
        <div className="mt-[16px] md:mt-[40px]">
          <div className="w-[280px] sm:w-[332px] h-6 justify-center items-center gap-2.5 inline-flex">
            <div className="w-[100px] sm:w-[147.50px] h-px relative bg-gray-200" />
            <div className="flex-col justify-center items-center inline-flex">
              <div className="text-center text-neutral-900 text-base font-normal leading-normal">
                or
              </div>
            </div>
            <div className="w-[100px] sm:w-[147.50px] h-px relative bg-gray-200" />
          </div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={signInValidationSchema}
          onSubmit={onSubmit}
        >
          <Form className="">
            <div className="relative mt-[32px] md:mt-[46px]">
              <TextInput
                placeholder="Email address"
                type="email"
                name="email"
                id="email"
                password={false}
              />

              <ErrorMessage
                name="email"
                component="div"
                className="absolute text-red-500"
              />
            </div>
            <div className="relative mt-[30px] md:mt-[44px]">
              <TextInput
                placeholder="Password"
                type="password"
                name="password"
                id="password"
                password={true}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="absolute text-red-500"
              />
            </div>
            <div className="mt-[32px] md:mt-[40px]">
              <Button
                disabled={
                  formValue?.email && formValue?.password
                    ? loader === false && false
                    : true
                }
                buttonText="Sign in"
              />
            </div>
            <AutoSubmitToken setFormValue={setFormValue} />
          </Form>
        </Formik>
        <div className="mt-[16px] md:mt-[40px]">
          <Link to="/forgot-password" className="text-poppins w-[176.65px] text-center text-violet-500 text-base font-normal underline">
            Forgot password?
          </Link>
        </div>
        <div className="flex items-center justify-center mt-[7px]">
          <div className="text-poppins text-center text-neutral-900 text-base font-normal leading-normal">
            Don’t have an account?
          </div>
          <Link to='/sign-up' className="text-violet-500 text-base font-normal underline leading-normal ml-2">
            Sign Up.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
