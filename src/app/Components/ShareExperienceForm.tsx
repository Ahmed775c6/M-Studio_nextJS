'use client';
import { useState } from "react";
import ClientCard from "@/app/Components/ClientCard";
import SubmitBtn from "@/app/Components/SubmitBtn";
import { UserType } from "@/lib/Types";
export default function ShareExperienceForm({ user }: { user: UserType }) {
  const [comment, setComment] = useState('what you have in mind ?');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment, userId: user._id }),
      });
      
      if (res.ok) {
        setComment('');
        // Handle success
      }
    } catch (err) {
      console.error('Error submitting comment:', err);
    }
  };

  return (
    <div className="flex flex-col p-10 w-full bg-black gap-4">
      <h2 className="text-[30px] text-white w-full p-4 bg-gray-600">Share your Experience:</h2>
      <div className="w-full">
        <ClientCard img={user.pic} text={comment} source={user.name} />
      </div>
      <form onSubmit={handleSubmit} className="w-full flex relative justify-center items-center p-2 flex-row gap-4">
<div className="flex flex-col gap-3 w-full">
            <label htmlFor="commentaire" className=" text-white font-semibold">Your Comment :</label>
        <textarea name="comment101" id="comment101"  placeholder={`What's on your mind ${user.name}?`}
         className="p-4 w-full text-white bg-[rgba(24,24,24,0.9)]"
                value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
         ></textarea>
   
        <SubmitBtn isLoading={false} text="SEND"/>
</div>
      </form>
    </div>
  );
}