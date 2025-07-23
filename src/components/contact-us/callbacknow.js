
import "./style.css";
import style from './contactus.module.scss';
import React, { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Dialog } from 'primereact/dialog';
import PhoneInput, {getCountryCallingCode} from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { RequestCallBackAPI } from '../../api/contactAPI';

const CallbackNow = () => {
    const [visible, setVisible] = useState(false);
    const [visibleEmail, setVisibleEmail] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);
    const [placeholder, setPlaceholder] = useState("+61");
    const [error, setError] = useState('');
    // Define your validation schema
    const schema = yup.object().shape({
      name: yup.string().required("Name is required"),
      email: yup.string().email("Invalid email address").required("Email is required"),
      phone_number: yup.string()
        .required("Phone number is required")
        .matches(/^\+\d{1,3}\d{4,14}$/, "Invalid phone number format"),
    });
  
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
      resolver: yupResolver(schema),
    });
  
  
    const onSubmit = async (data) => {
      if (!captchaValue) {
        setError("Please complete the CAPTCHA.");
        return;
      }
      try {
        const result = await RequestCallBackAPI(data); 
        console.log("Form submitted successfully:", result);
        reset();
        setVisible(false);
        setVisibleEmail(false);
        window.location.href = "/thank-you";
      } catch (err) {
        console.error("Error submitting form:", err);
        setError("Something went wrong. Please try again later.");
      }
    };
    
    const handleCaptchaChange = (value) => {
      setCaptchaValue(value);
      setError("");
    };
    
    const handleCountryChange = (country) => {
      if (country) {
        const countryCode = getCountryCallingCode(country);
        setPlaceholder(`+${countryCode}`);
      } else {
        setPlaceholder("+61"); // Default placeholder if country is undefined
      }
    };
  
    const footerContent = (
        <div className="flexWrapBoxE">
         <button className="borderbuttonStyle firstBut" onClick={() => setVisible(false)}>Cancel</button>
         <button className="darkbuttonStyle" onClick={handleSubmit(onSubmit)}>Send</button>
        </div>
    );
    const HeaderContent = (
        <div className="flexWrapBoxc">
         <h1 className="requestCallback">Request a callback</h1>
        </div>
    );
  return (
    <>
      <div className="query-button ">
        <button onClick={() => setVisible(true)}>Request</button></div>
       <Dialog visible={visible} style={{ width: '566px' }} className={style.requestsendModel} onHide={() => {if (!visible) return; setVisible(false); }} footer={footerContent} header={HeaderContent}>
      <form className={style.requestsendForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={style.marginbotton}>
            <label htmlFor="name">Name</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <input placeholder="Enter your name" id="name" {...field} />}/>
            {errors.name && <p className="error-message">{errors.username.name}</p>}
          </div>
          <div className={style.marginbotton}>
                        <label>Phone number</label>
                        <Controller
                            name="phone_number"
                            control={control}
                            render={({ field }) => (
                              <PhoneInput
                                defaultCountry="AU" 
                                value={field.value}
                                className="phoneInput input2"
                                placeholder={placeholder} 
                                containerClass={style.countrySelector}
                                onChange={field.onChange}
                                onCountryChange={handleCountryChange}
                                style={{ color: '#1D2939' }}
                              />
                            )}
                          />
                        {errors.phone_number && <p className="error-message">{errors.phone_number.message}</p>}
                    </div>
                    <div className={style.marginbotton}>
            <label htmlFor="email">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => <input placeholder="company@email.com" id="email" {...field} 
              rules={
                {
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Invalid email format'
                  }
                }
              }
              />}/>
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
           <div className={style.marginbotton}> 
            <ReCAPTCHA
        sitekey="6LfAwdMqAAAAAFtI7SUPXKb1ew7C0jUYRvxDqjpS"
        onChange={handleCaptchaChange}
      />
            {error && <p style={{ color: 'red' }}>{error}</p>}

          </div> 
        </form>
            </Dialog>
    </>
  )
}

export default CallbackNow
