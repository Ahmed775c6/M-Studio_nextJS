'use client';
import { useState } from "react";
import SubmitBtn from "@/app/Components/SubmitBtn";

export default function ChangePasswordForm() {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passLoading, setPassLoading] = useState(false);
  const [error, setError] = useState('');

  const handelPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPassLoading(true);
    
    try {
      const res = await fetch(`/api/UpdatePasswordAuthi`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ old: oldPassword, new: newPassword }),
      });
      
      const data = await res.json();
      
      if (data.message === true) {
        window.location.reload();
      } else if (data.message === false) {
        setError('Old password incorrect!');
      } else {
        setError('Something went wrong, please try again');
      }
    } catch (err) {
      console.error("Error updating password", err);
      setError('Network error, please try again');
    } finally {
      setPassLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-4  bg-black ">
      <h2 className="text-white text-[30px] p-4 bg-gray-600">Change Password ?</h2>
      <form onSubmit={handelPassword} className="w-full p-6 flex flex-col gap-3">
        {error && <p className="text-red-500">{error}</p>}
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="old-password" className="label text-white">
            <i className="ri-lock-unlock-line"></i> Old Password
          </label>
          <input
            name="old-password"
            className="w-full bg-[rgba(24,24,24,0.2)] text-white p-2"
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
  <div className="w-full flex flex-col gap-2">
<label htmlFor="new-password" className="label text-white "><i className="ri-lock-password-line"></i> New Password</label>
        <input 
        name="new-password"
        className="w-full bg-[rgba(24,24,24,0.2)] text-white p-2"
        type="password" 
        onChange={(e)=>{
setNewPassword(e.target.value);
        }}
        />
</div>
        <SubmitBtn isLoading={passLoading} text="CHANGE" />
      </form>
    </div>
  );
}