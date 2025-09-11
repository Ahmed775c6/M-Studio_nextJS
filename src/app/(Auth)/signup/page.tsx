'use client';
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Verifications from "../../Components/Verifications";

import SocialMediaIcons from "@/app/Components/SocialMedia";
import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';


interface FormValues {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const Signup = () => {

  const [loading, setLoading] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [authStatus, setAuthStatus] = useState<string>('');
const [token, setToken] = useState<string>('');




  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    password: Yup.string().required('Password is required')
  });

  const handleSubmit = async (values: FormValues) => {
setLoading(true);

    try {
      const utrl = process.env.GO_URL;
      console.log(utrl)
      const response = await fetch(`http://localhost:8080/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        setAuthStatus(data.message);
        setLoading(false);
        setToken(data.authToken);
        // Redirect or show success message
      } else if (response.status === 409) {
        setEmailExists(true);
        setLoading(false);
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setLoading(false);
    }
  }; 



  return (
    <>
{
      token && <Verifications token={token} />
}
      <div className="w-full flex flex-col max-h-screen overflow-hidden">
        <section className="signup flex relative w-full">
          <div className="3d-baby w-full">
            <SocialMediaIcons />
          </div>
          
          <div className="log-form p-4 w-full">
            <Image 
              src="/logo_we.png" 
              alt="logo" 
              className="logo"
              width={100}
              height={40}
            />
            
            <Link href="/" className="text-white absolute right-10 top-10">
              Back
            </Link>
            
            <h2 className="text-white text-[40px]" style={{ fontWeight: 600 }}>
              Getting Started
            </h2>
            
            <p className="text-white mt-2 font-semibold">
              Already have an account? {' '}
              <Link href="/login" className="text-[var(--brown)]">
                Login
              </Link>
            </p>
            
            <Formik
              initialValues={{ name: '', email: '', phone: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form className="w-full h-full flex flex-col mt-2 gap-4">
                  <div className="flex flex-col relative gap-2 w-full">
                    <label htmlFor="name">User Name</label>
                    <Field 
                      type="text" 
                      className="f_input" 
                      name="name" 
                      placeholder="Your Name" 
                      required 
                    />
                    <ErrorMessage name="name" component="div" className="error-message" />
                    <span className="input-border"></span>
                  </div>
                  
                  <div className="flex flex-col relative gap-2 w-full">
                    <label htmlFor="email">Email</label>
                    <Field 
                      type="email" 
                      className="f_input" 
                      name="email" 
                      placeholder="Your Email" 
                      required 
                    />
                    <ErrorMessage name="email" component="div" className="error-message" />
                    {emailExists && <span className="text-red-500">This Email is already in use!</span>}
                    <span className="input-border"></span>
                  </div>
                  
                  <div className="flex flex-col relative gap-2 w-full">
                    <label htmlFor="phone">Phone Number</label>
                    <Field 
                      type="tel" 
                      className="f_input" 
                      name="phone" 
                      placeholder="Your Phone Number" 
                      required 
                    />
                    <ErrorMessage name="phone" component="div" className="error-message" />
                    <span className="input-border"></span>
                  </div>
                  
                  <div className="flex flex-col relative gap-2 w-full">
                    <label htmlFor="password">Password</label>
                    <div className="relative">
                      <Field
                        type={passwordVisible ? 'text' : 'password'} 
                        className="f_input w-full" 
                        name="password" 
                        placeholder="Your Password" 
                        required 
                      />
                      <i 
                        className={`ri-eye${passwordVisible ? '' : '-off'}-line absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer`}
                        onClick={togglePasswordVisibility}
                      ></i>
                    </div>
                    <ErrorMessage name="password" component="div" className="error-message" />
                    <span className="input-border"></span>
                  </div>
                  
                  <button type="submit" disabled = {loading} 
                  className={`f_btn ${loading ? 'cursor-not-allowed' : "cursor-pointer"}`}>
                    {
                      loading ? <span className="animate-spin">⏳</span> : 'Sign Up'
                    }
                    </button>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;