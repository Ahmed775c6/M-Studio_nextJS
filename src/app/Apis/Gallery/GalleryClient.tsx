// app/gallery/GalleryClient.tsx (Client Component)
'use client';

import { useState } from "react";
import Image from 'next/image';

interface GalleryItem {
  category: string;
  imageUrl: string;
  title: string;
  // Add other properties if they exist in your data
}

const GalleryClient = ({ initialGalleryData }: { initialGalleryData: GalleryItem[] }) => {
  const [Img, setImg] = useState('');
  const [Hover, setHover] = useState('hidden');
  const [Catego, setCatego] = useState('All');
  const [galleryData] = useState(initialGalleryData);
  const [MoreImgs, setMoreImgs] = useState(9);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [timeOF, setTimeOff] = useState(false);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

  function LoadMore() {
    if (MoreImgs <= galleryData.length) {
      setMoreImgs(prev => prev + 10);
    } else {
      setTimeOff(true);
    }
    setLoadingBtn(false);
  }

  const categories = ["All", ...new Set(galleryData.map((item: GalleryItem) => item.category))];

  return (
    <section className="flex flex-col w-full gap-4 justify-center align-middle relative">
      {/* Image Modal */}
      <div className={`${Hover} w-full hovv bg-[rgba(0,0,0,1)] flex-col fixed top-0 left-0 p-4 h-[100vh] overflow-hidden z-50`}>
        <button
          className="ri-close-line absolute right-10 top-10 z-10 text-white cursor-pointer text-2xl"
          onClick={() =>{
          
             setHover('hidden')
          }}
        ></button>
        <div className="relative w-full h-full">
          <Image 
            src={`/${Img}`}
            alt="hovered"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>
      </div>

      {/* Gallery Header */}
      <h1 className="text-left flex justify-start gap-4 bg-black p-4 iii linethrow">
        <i className="ri-gallery-line"></i> Gallery
      </h1>

      {/* Category Filters */}
      <div className="gallery-list p-4 flex-wrap flex justify-center align-middle gap-2">
        {categories.map((category: string, index : number) => (
          <button 
            key={index}
            className={`p-[10px] text-white outline-none rounded-sm ${
              Catego === category ? 'bg-[var(--brown)]' : 'bg-black'
            }`}
            onClick={() => setCatego(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Gallery */}
      <div className="gallery1">
        {galleryData.map((image : GalleryItem, index : number) => 
          (Catego === image.category || Catego === "All") && 
          index <= MoreImgs && (
            <div 
              key={index}
              className="cursor-pointer overflow-hidden"
              onClick={() => {
                setImg(image.imageUrl);
                setHover('flex');
              }}
            >
              <Image
                src={`${baseUrl}/${image.imageUrl}`}
                alt={image.title}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          )
        )}
      </div>

      {/* Load More Button */}
      <div
         onClick={() => {
            if (!timeOF) {
              setLoadingBtn(true);
              setTimeout(LoadMore, 2000);
            }
          }} 
      className={`loadMore w-full justify-center text-white flex cursor-pointer p-4 ${
        timeOF ? 'bg-black' : 'bg-[var(--brown)]'
      }`}>
        <span 
          className="cursor-pointer flex justify-center gap-2"
       
        >
          {loadingBtn ? (
            <span className="animate-spin">⏳</span>
          ) : (
            <span>{timeOF ? 'No more Images' : 'See More'}</span>
          )}
        </span>
      </div>
    </section>
  );
};

export default GalleryClient;