import UpdateProfileImageForm from "@/app/Components/UpdateProfileImageForm";
import UpdatePersonalInfoForm from "@/app/Components/UpdatePersonalInfoForm";
import ChangePasswordForm from "@/app/Components/ChangePasswordForm";
import ShareExperienceForm from "@/app/Components/ShareExperienceForm";
import UserSideBar from "@/app/Components/UserSideBar";
import { UserType } from "@/lib/Types";
import { cookies } from 'next/headers'

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "TEST0101 | Profile",
  description: "Dashboard Overview Page",
};

// Mock user data - replace with actual data fetching
const getUserData = async (id: string): Promise<UserType> => {
  return {
    _id: id,
    pic: "/Avatar.png",
    name: "Ahmed",
    gender: "Male",
    email: "ahmed@example.com",
    phone: "25148596",
    birthday: "1999-02-20",
    cover: "",
    Gallery: [],
    Bookings: [],
    where: "",
  };
};

export default async function User({ params }: { params: { id: string } }) {
 
   const cookie = (await cookies()).get('csrf_token')?.value
  const cookie2 = (await cookies()).get('session_token')?.value
  
   const res = await fetch(`http://localhost:3000/Apis/user/${cookie2}`,{cache: 'no-store'})
   const user = await res.json()
   console.log(user)

  return (
    <section className="w-full flex min-h-screen bg-[rgba(0,0,0,0.1)] h-[100%]">
      
      <UserSideBar />
      <div className="w-full flex-1 p-4 flex gap-2 flex-col">
        <div className="user-content relative rounded-sm">
          <h4 className="font-semibold text-white p-8">
            Welcome back <span className="text-[var(--brown)]">{user.name}</span>
          </h4>
          <img src={user.pic} alt="avatar"   className=" w-10 h-10 cursor-pointer absolute right-10 top-8 object-cover rounded-full"/>
          
          <div className="flex w-full gap-2 rounded-sm">
            <UpdateProfileImageForm user={user} />
            <UpdatePersonalInfoForm user={user} />
          </div>
          <ChangePasswordForm />
          <ShareExperienceForm user={user} />
        </div>
      </div>
    </section>
  );
}