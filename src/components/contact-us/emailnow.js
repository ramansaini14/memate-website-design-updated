import "./style.css";
import style from './contactus.module.scss';
import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog } from 'primereact/dialog';
import 'react-phone-number-input/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { emailNowAPI } from '../../api/contactAPI';

const EmailNow = () => {
    const [visible, setVisible] = useState(false);
    const [error, setError] = useState('');
    const [visibleEmail, setVisibleEmail] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);
    // Validation schema with all fields
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email address").required("Email is required"),
        message: yup.string().required("Message is required"),
    });

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = async (data) => {
      if (!captchaValue) {
          setError("captcha", {
              type: "manual",
              message: "Please complete the CAPTCHA.",
          });
          return;
      }
      try {
          const result = await emailNowAPI(data); 
          console.log("Form submitted successfully:", result);
          reset();
          setVisible(false);
          setVisibleEmail(false);
          window.location.href = "/thank-you";
      } catch (err) {
          console.error("Error submitting form:", err);
          if (err.response && err.response.data && err.response.data.errors) {
              const serverErrors = err.response.data.errors;
  
              // Handle email-specific server error
              if (serverErrors.email) {
                  setError("email", {
                      type: "server",
                      message: serverErrors.email[0], // Show the first email error message
                  });
              }
          } else {
              setError("form", {
                  type: "server",
                  message: "Something went wrong. Please try again later.",
              });
          }
      }
  };
  
  

    const handleCaptchaChange = (value) => {
      setCaptchaValue(value);
    };
  
    const footerContent = (
        <div className="flexWrapBoxE">
            <button className="borderbuttonStyle firstBut" onClick={() => setVisible(false)}>Cancel</button>
            <button className="darkbuttonStyle" onClick={handleSubmit(onSubmit)}>Send</button>
        </div>
    );

    const HeaderContent = (
        <div className="flexWrapBoxc requestCallback">
            <h1>Email now</h1>
        </div>
    );

    return (
        <>
            <div className="query-button query-button-color">
            <button onClick={() => setVisible(true)}>Email now</button></div>
            <Dialog
                visible={visible}
                style={{ width: '566px' }}
                className={style.requestsendModel}
                onHide={() => setVisible(false)}
                footer={footerContent}
                header={HeaderContent}
            >
                <form className={style.requestsendForm} onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.marginbotton}>
                        <label htmlFor="name">Name</label>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => (
                                <input
                                    placeholder="Enter your name"
                                    id="name"
                                    {...field}
                                />
                            )}
                        />
                        {errors.name && <p className="error-message">{errors.name.message}</p>}
                    </div>
                    <div className={style.marginbotton}>
                <label htmlFor="email">Email</label>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <input
                            placeholder="company@email.com"
                            id="email"
                            {...field}
                        />
                    )}
                />
                {errors.email && (
                    <p className="error-message" style={{ color: "red" }}>
                        {errors.email.message}
                    </p>
                )}
                 {error && <p style={{ color: 'red' }}>The email has already been taken.</p>}
            </div>



{/* 
                    <div className={style.marginbotton}>
                        <label htmlFor="email">Email</label>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field }) => (
                                <input
                                    placeholder="company@email.com"
                                    id="email"
                                    {...field}
                                />
                            )}
                        />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}
                    </div> */}

                    <div className={style.marginbotton}>
                        <label htmlFor="message">Message</label>
                        <Controller
                            name="message"
                            control={control}
                            render={({ field }) => (
                                <textarea
                                placeholder="Enter discription"
                                id="description"
                                {...field}
                                rows={5} 
                                style={{
                                  width: "100%", 
                                  padding: "10px", 
                                  borderRadius: "4px", 
                                  border: "1px solid #D0D5DD", 
                                  fontSize: "16px", 
                                  color: "#000", 
                                  backgroundColor: "#fff", 
                                  outline: "none", 
                                  boxShadow: "none", 
                                  fontFamily: "sequel_sans_roman_head",
                                   fontWeight: "100",
                                   marginTop: '6px',
                                }}
                              />
                            )}
                        />
                        {errors.message && <p className="error-message">{errors.message.message}</p>}
                    </div>
                    <div className={style.marginbotton}>
            <ReCAPTCHA
        sitekey="6LfAwdMqAAAAAFtI7SUPXKb1ew7C0jUYRvxDqjpS"
        onChange={handleCaptchaChange}/>
        
          </div>
                </form>
            </Dialog>
        </>
    );
};

export default EmailNow;
