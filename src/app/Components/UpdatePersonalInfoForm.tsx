'use client';
import { useState } from "react";
import { UserType } from "@/lib/Types";

export default function UpdatePersonalInfoForm({ user }: { user: UserType }) {
  const [fullName, setFullName] = useState(user.name);
  const [gender, setGender] = useState(user.gender);
  const [phone, setPhone] = useState(user.phone);
  const [birthday, setBirthday] = useState(user.birthday);

  const handelUserInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    const Data = { fullName, gender, birthday, phone };
    
    try {
      const res = await fetch(`/api/UpdateUserInfo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Data),
      });
      
      if (!res.ok) throw new Error('Update failed');
      // Handle success (e.g., show notification)
    } catch (err) {
      console.error('Error updating user info:', err);
    }
  };

  return (
    <form onSubmit={handelUserInfo} className="w-full p-4 text-white flex flex-col gap-4 bg-[rgba(0,0,0,0.9)]">
      <h2 className="text-white text-[30px] bg-gray-600 p-4 ">Personal Information :</h2>
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            className="user_form relative p-2 text-white"
            placeholder="Your Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
         <div className="flex flex-col gap-2">
      <label htmlFor="gender">Gender</label>
      <input
        type="text"
        className="user_form relative p-2 text-white xxxx"
        placeholder="Your Gender"
        value={gender}
        onChange={(e)=>{
          setGender(e.target.value);
         }}
      />
    </div>
     <div className="flex flex-col gap-2">
      <label htmlFor="email">User Email</label>
      <input
        type="email"
        className="user_form relative p-2 text-white bg-[var(--blue)] cursor-not-allowed"
        placeholder="Your Email Address"
        value={user.email}
        readOnly
      />
    </div>
       <div className="flex flex-col gap-2">
      <label htmlFor="tel">Your Phone Number</label>
      <input
        type="tel"
        className="user_form relative p-2 text-white xxxx"
        placeholder="Your Phone Number"
        value={phone}
        onChange={(e)=>{
          setPhone(e.target.value);
         }}
      />
    </div>
    <div className="flex flex-col gap-2">
      <label htmlFor="birthday">Your Birthday</label>
      <input
        type="date"
        className="user_form cursor-pointer relative p-2 text-white xxxx"
        placeholder="Your Birthday"
        value={birthday}
        onChange={(e)=>{
          setBirthday(e.target.value);
         }}
      />
    </div>
      </div>
      <div className="flex w-full justify-center">
        <button className="p-3 bg-[var(--brown)] w-full max-w-[200px] rounded-sm cursor-pointer justify-center flex">
          Update
        </button>
      </div>
    </form>
  );
}