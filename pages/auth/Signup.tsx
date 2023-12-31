import React, { useState } from "react";
import TextInput from "../../components/auth/TextInput";
import Button from "../../components/auth/Button";
import LogoApp from "../../components/auth/LogoApp";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AutoSubmitToken from "../../components/auth/AutoSubmitToken";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

interface loginFormValues {
  email: string;
  businessName: string;
  fullName: string;
  phoneNumber: string;
}

const Signup = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<any>();

  const router = useRouter();
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const initialValues = {
    email: "",
    businessName: "",
    fullName: "",
    phoneNumber: "",
  };

  const signUpValidationSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
    businessName: Yup.string().required("Business Name is required"),
    fullName: Yup.string().required("Full name is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
  });

  const onSubmit = async (values: loginFormValues) => {
    setLoader(true);
    axios
      .post(baseUrl + "/signUp", {
        fullName: values?.fullName,
        bussinessName: values?.businessName,
        phoneNumber: values?.phoneNumber,
        email: values?.email,
      })
      .then((response) => {
        setLoader(false);
        router.push("/auth/RegistrationDone");
      })
      .catch((error) => {
        setLoader(false);
        alert("Please refresh and try again later due to a server error.");
        console.log(error);
      });
  };
  return (
    <div className="mb-[-200px] bg-image min-h-screen p-6 md:p-10 flex items-center justify-center">
      <div className="m-4 min-w-[310px] max-w-[452px] h-auto py-6 px-6 md:py-[50px] md:px-[59px] flex items-center justify-center flex-col rounded-2xl bg-[#F9F9F7] border-[#373389] border-[1px]">
        <div>
          <LogoApp />
        </div>
        <div className="text-nunito mt-[16px] md:mt-[40px] text-center text-neutral-900 text-[23px] font-semibold">
          Welcome
        </div>
        <div className="text-nunito mt-[8px] md:mt-[20px] text-center text-neutral-900 text-[23px] font-semibold">
          Sign up to HIFI Pay
        </div>
        <div className="flex items-center justify-center flex-col sm:flex-row mt-[24px]">
          <div className="text-poppins text-center text-neutral-900 font-normal leading-normal">
            Already have an account?
          </div>
          <Link
            href="/auth/Signin"
            className="text-violet-500 font-normal underline leading-normal ml-2"
          >
            Sign In.
          </Link>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={signUpValidationSchema}
          onSubmit={onSubmit}
        >
          <Form className="">
            <div className="relative mt-[30px]">
              <TextInput
                placeholder="Business Name"
                type="text"
                name="businessName"
                id="businessName"
                password={false}
              />
              <ErrorMessage
                name="businessName"
                component="div"
                className="absolute text-red-500"
              />
            </div>
            <div className="relative mt-[30px]">
              <TextInput
                placeholder="Full Name"
                type="fullName"
                name="fullName"
                id="fullName"
                password={false}
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="absolute text-red-500"
              />
            </div>
            <div className="relative mt-[30px]">
              <TextInput
                placeholder="Phone Number"
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                password={false}
              />
              <ErrorMessage
                name="phoneNumber"
                component="div"
                className="absolute text-red-500"
              />
            </div>
            <div className="relative mt-[30px]">
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

            <div className="mt-[30px]">
              <Button
                disabled={
                  formValue?.email &&
                  formValue?.businessName &&
                  formValue?.phoneNumber &&
                  formValue?.fullName
                    ? loader === false && false
                    : true
                }
                buttonText="Sign up"
              />
            </div>
            <AutoSubmitToken setFormValue={setFormValue} />
          </Form>
        </Formik>

        <div className="flex items-center justify-center my-[40px]">
          <div className="text-poppins text-center text-neutral-900 text-[14px] font-xs leading-normal">
            By continuing I acknowledge that I have read the
            <span className="text-violet-500 text-[14px] font-normal underline leading-normal mx-2">
              Privacy Policy
            </span>
            &
            <span className="text-violet-500 text-[14px] font-normal underline leading-normal mx-2">
              Terms and Conditions.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
