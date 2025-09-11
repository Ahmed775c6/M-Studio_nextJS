'use client';
import { UserType } from "@/lib/Types";
import { useState } from "react";
import SubmitBtn from "@/app/Components/SubmitBtn";

export default function UpdateProfileImageForm({ user }: { user: UserType }) {
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [File, setFile] = useState<File | null>(null);
  const [imageLoading, setImageLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setFile(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage('');
    setFile(null);
  };

  const SendPrf = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!File) return;
    
    setImageLoading(true);
    const formData = new FormData();
    formData.append('prf', File);
    formData.append('id', user._id);

    try {
      const res = await fetch(`/api/UpdatePrf`, {
        method: 'POST',
        body: formData,
      });
      
      const data = await res.json();
      setImageLoading(false);
      
      if (data.message === 'Profile image updated successfully') {
        window.location.reload();
      }
    } catch (err) {
      console.error("Error uploading profile image:", err);
      setImageLoading(false);
    }
  };

  return (
    <div className="image-input flex flex-col bg-black p-4 gap-4">
      <h2 className="text-white text-[30px] p-4 bg-gray-600">Profile Picture :</h2>    
      <div className="image-preview relative">
        <img 
          src={selectedImage || user.pic} 
          alt="Selected" 
          className="w-[300px] h-[300px] object-cover rounded-sm" 
        />
        {selectedImage && (
          <button 
            onClick={handleRemoveImage} 
            className="absolute top-0  text-white text-[11px] w-10 h-10 cursor-pointer rounded-[2px] bg-[var(--brown)]"
          >
            X
          </button>
        )}
      </div>
      <form onSubmit={SendPrf}>
        <input
        className="bg-gray-600 p-2 text-white cursor-pointer"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
        <div className="flex w-full justify-center p-4">
          <SubmitBtn isLoading={imageLoading} text="SEND" />
        </div>
      </form>
    </div>
  );
}