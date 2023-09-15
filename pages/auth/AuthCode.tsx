import React, { useState } from "react";
import LogoApp from "../../components/auth/LogoApp";
import Button from "../../components/auth/Button";
import TextInput from "../../components/auth/TextInput";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import AutoSubmitToken from "../../components/auth/AutoSubmitToken";

interface authCodeValues {
  code: string;
}

const AuthCode = () => {
  const [loader, setLoader] = useState<boolean>(false);
  const [formValue, setFormValue] = useState<any>();

  const initialValues = {
    code: "",
  };

  const authCodeValidationSchema = Yup.object({
    code: Yup.string()
      .required("Authenticator Code is required")
      .max(6, "Maximum 6-digit code required")
      .min(6, "Minimum 6-digit code required"),
  });

  const onSubmit = async (values: authCodeValues) => {
    setLoader(true);
    alert("auth code " + values?.code);
    setLoader(false);
  };

  return (
    <div>
      <div className="mb-[-200px] bg-image min-h-screen p-6 md:p-10 flex items-center justify-center">
        <div className="m-4 min-w-[300px] max-w-[452px] h-auto py-6 px-6 md:py-[50px] md:px-[59px] flex items-center justify-center flex-col rounded-2xl bg-[#F9F9F7] border-[#373389] border-[1px]">
          <div>
            <LogoApp />
          </div>
          <div className="mt-[16px] md:mt-[40px]">
            <div className="text-poppins w-[280px] sm:w-[296px] text-center text-neutral-900 font-normal leading-normal">
              Enter the 6-digit code found in your Google authenticator app.
            </div>
          </div>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={authCodeValidationSchema}
              onSubmit={onSubmit}
            >
              <Form className="mt-[16px] md:mt-[46px]">
                <div className="relative mt-[16px] md:mt-[46px]">
                  <TextInput
                    placeholder="Authenticator Code"
                    type="number"
                    name="code"
                    id="code"
                    password={false}
                  />

                  <ErrorMessage
                    name="code"
                    component="div"
                    className="absolute text-red-500"
                  />
                </div>

                <div className="mt-[32px] md:mt-[40px]">
                  <Button
                    disabled={
                      formValue?.code ? loader === false && false : true
                    }
                    buttonText="Confirm"
                  />
                </div>
                <AutoSubmitToken setFormValue={setFormValue} />
              </Form>
            </Formik>
          </div>
          <div className="mt-[16px] md:mt-[40px]">
            <div className="text-poppins cursor-pointer text-center text-violet-500 font-normal underline">
              Use another authentication method.
            </div>
            <div className="mt-1 text-poppins text-center cursor-pointer text-violet-500 font-normal underline">
              Need help authenticating?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCode;
