'use client'
import SocialMediaIcons from "@/app/Components/SocialMedia";
import { useState } from "react";
import { comOn } from "@/app/lib/test101";

const Login = () => {
  const [forgetPassword, setForgetPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [wrongPass, setWrongPass] = useState(false);
  const [emailNotFound, setEmailNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  
  // Fixed environment variable name
  const baseUrl = process.env.NEXT_PUBLIC_GO_URL || "http://localhost:8080";
  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setWrongPass(false);
  setEmailNotFound(false);

  // Create form data
  const formData = new URLSearchParams();
  formData.append('email', email);
  formData.append('password', password);

  try {
    const response = await fetch(`${baseUrl}/api/login`, {
      method: 'POST',
      credentials: 'include',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded' 
      },
      body: formData.toString(),
    });

    if (response.ok) {
      const user = await response.json()
    await comOn(user._id)

    } else {
      // Set specific error states
      if (response.status === 400) {
        setWrongPass(true);
      } else if (response.status === 404) {
        setEmailNotFound(true);
      }
    }
  } catch (error) {
    console.error('Network error:', error);
 
  } finally {
    setLoading(false);
  }
};

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {forgetPassword && (
        <div className="fixed flex justify-center items-center top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 h-[100vh] w-full">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <i 
              className="cursor-pointer text-black absolute text-[24px] z-50 right-5 top-5 ri-close-large-line" 
              onClick={() => setForgetPassword(false)}
            ></i>
            <h3 className="text-xl font-bold mb-4">Reset Password</h3>
            <p className="mb-4">Enter your email to receive a password reset link</p>
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 border rounded mb-4"
            />
            <button className="bg-[var(--brown)] text-white py-2 px-4 rounded">
              Send Reset Link
            </button>
          </div>
        </div>
      )}
      
      <div className="w-full flex flex-col">
        <section className="login h-[100%] flex relative w-full">
          <div className="3d-baby w-full">
            <SocialMediaIcons/>
          </div>
          
          <div className="log-form p-4 w-full">
            <img src="/logo_we.png" alt="logo" className="logo" />
            <h2 className="text-white text-[40px]" style={{fontWeight:600}}>
              Getting Started
            </h2>
            <p className="text-white mt-2">
              Don't have an account? <a href="/signup" className="text-[var(--brown)]">Register</a>
            </p>
            
            <form onSubmit={handleSubmit} className="w-full h-full flex flex-col mt-2 gap-4">
              <div className="flex flex-col relative gap-2 w-full">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="f_input"
                  name="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="input-border"></span>
              </div>
              {emailNotFound && <span className="text-red-500">No user with this email!</span>}
              
              <div className="flex flex-col relative gap-2 w-full">
                <label htmlFor="password">Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="f_input relative"
                  name="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p 
                  className="absolute right-0 text-white top-10 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "hide" : "show"}
                </p>
                <span className="input-border"></span>
              </div>
              {wrongPass && <span className="text-red-500">Incorrect password!</span>}

              <a 
                href="#forgetpassword" 
                className="text-white forgetlink" 
                onClick={(e) => {
                  e.preventDefault();
                  setForgetPassword(true);
                }}
              >
                Forgot Password?
              </a>

              <button 
                type="submit" 
                disabled={loading}
                className={`f_btn ${loading ? 'cursor-not-allowed opacity-75' : "cursor-pointer"}`}
              >
                {loading ? <span className="animate-spin">⏳</span> : 'Sign In'}
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;