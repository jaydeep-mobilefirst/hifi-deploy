import React, { useState } from "react";
import TextInput from "../../components/auth/TextInput";
import Button from "../../components/auth/Button";
import LogoApp from "../../components/auth/LogoApp";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AutoSubmitToken from "../../components/auth/AutoSubmitToken";
import Link from "next/link";
import { useRouter } from 'next/router';

interface loginFormValues {
  email: string;
}

const ForgotPassword = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<any>();

  const initialValues = {
    email: "",
  };

  const forgotPasswordValidationSchema = Yup.object({
    email: Yup.string().email().required("Email is required"),
  });

  const onSubmit = async (values: loginFormValues) => {
    setLoader(true);
    alert("email: "+ values?.email);
    setLoader(false);
  };
  return (
    <div className="mb-[-200px] bg-image min-h-screen p-6 md:p-10 flex items-center justify-center">
      <div className="m-4 min-w-[290px] max-w-[452px] h-auto py-6 px-6 md:py-[50px] md:px-[59px] flex items-center justify-center flex-col rounded-2xl bg-[#F9F9F7] border-[#373389] border-[1px]">
        <div>
          <LogoApp />
        </div>

        <div className="text-nunito mt-[8px] md:mt-[20px] text-center text-neutral-900 text-[23px] font-semibold">
          Reset Password to HIFI Pay
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={forgotPasswordValidationSchema}
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

            <div className="mt-[32px] md:mt-[40px]">
              <Button
                disabled={formValue?.email ? loader === false && false : true}
                buttonText="Sent Link"
              />
            </div>
            <AutoSubmitToken setFormValue={setFormValue} />
          </Form>
        </Formik>
        <div className="mt-[16px] md:mt-[40px]">
          <div className="flex items-center justify-center flex-col sm:flex-row">
            <div className="text-poppins text-center text-neutral-900 font-normal leading-normal">
              Already have an account?
            </div>
            <Link href="/auth/Signin" className="text-violet-500 font-normal underline leading-normal ml-2">
              Sign In.
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[7px] flex-col sm:flex-row">
          <div className="text-poppins text-center text-neutral-900 font-normal leading-normal">
            Don’t have an account?
          </div>
          <Link href="/auth/Signup" className="text-violet-500 font-normal underline leading-normal ml-2">
            Sign Up.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
