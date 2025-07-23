import React, { useState } from "react";
import "./style.css";
import Link from "next/link";
import style from './subscribe.module.scss';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubscribeEmail } from '../../api/contactAPI';


const SubscribeForm = () => {
  const [serverError, setServerError] = useState('');
  const schema = yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {

    try {
      const result = await SubscribeEmail(data);
      if (result.error) {
        setServerError(result.errors.email[0]);
        window.location.href = '/thank-you';
        return;
      }
      
    } catch (error) {
      setServerError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className={style.Subscribebox}>
      <div className={style.Subscribeflexbox}>
        <span><b>Subscribe</b> to be updated on all things meMate</span>
        <div className={style.marginbotton}>
          <label htmlFor="email">Your Email</label>
          <div className={style.formWrapmain}>
            <div className={style.formWrap}>
              <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/envelope-subscribe.svg' alt='Envelope Subscribe'/>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <input placeholder="Enter your email address " id="email" {...field} />}
              />
            </div>
            <button className="darkbuttonStyle" onClick={handleSubmit(onSubmit)}>Subscribe</button>
          </div>
          {errors.email && (
          <p className="error-message">Validation Error: {errors.email.message}</p>
            )}
          <p>{serverError}</p>
          <p>
            By submitting this form, you’re consenting to receive communications from meMate via email about products offered by meMate. 
            You can unsubscribe from marketing communications at any time. Please see our Privacy 
            Disclosure Statement for <Link href='/'><u>Australia</u></Link> and <Link href='/'><u>New Zealand</u></Link> for information on how we use, collect and disclose your personal information.
          </p>
        </div>
      </div>
    </div>
  );
};


export default SubscribeForm
