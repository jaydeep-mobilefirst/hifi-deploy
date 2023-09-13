import React from "react";
import { useFormikContext } from "formik";

interface formValues {
  setFormValue: any;
}

const AutoSubmitToken: React.FC<formValues> = ({ setFormValue }) => {
  const { values, submitForm } = useFormikContext();
  React.useEffect(() => {
    setFormValue(values);
  }, [values, submitForm]);
  return null;
};

export default AutoSubmitToken;
