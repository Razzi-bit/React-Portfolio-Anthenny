import { useState } from "react";
import emailjs from "emailjs-com";

const useForm = (validation, form) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const sendEmail = () => {
    emailjs.sendForm("service_24j29tr", "template_e00m9sz", form.current, "SR17iEIADb6T20ayR").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const clearError = (e) => {
    const { name } = e.target;
    setErrors({ ...errors, [name]: "" });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    setErrors(validation(values));

    if (Object.keys(validation(values)).length === 0) {
      sendEmail();
      setValues({ name: "", email: "", phoneNumber: "", subject: "", message: "" });
    }
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return [values, handelChange, handelSubmit, errors, clearError];
};

export default useForm;
