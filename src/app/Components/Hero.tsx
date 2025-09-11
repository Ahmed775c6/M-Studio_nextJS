'use client';
import GlassButton from './GlassyButtons';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const socialMediaArray = [
    { icon: 'ri-instagram-line', url: 'https://instagram.com', color: '#E1306C' },
    { icon: 'ri-facebook-line', url: 'https://facebook.com', color: '#3b5998' },
    { icon: 'ri-tiktok-line', url: 'https://tiktok.com', color: '#000' },
    { icon: 'ri-whatsapp-line', url: 'https://whatsapp.com', color: '#25D366' },
    { icon: 'ri-telegram-line', url: 'https://telegram.org', color: '#0088CC' },
];

type HeroItem = {
  Section: string;
  text: string;
  BtnText: string;
  type: 'image' | 'video';
  src: string;
};



// Color mapping for Tailwind compatibility
const colorMap: Record<string, string> = {
  blue: 'text-blue-500',
  pink: 'text-pink-500',
  green: 'text-green-500',
  black: 'text-black',
};

const bgMap: Record<string, string> = {
  blue: 'bg-blue-500',
  pink: 'bg-pink-500',
  green: 'bg-green-500',
  black: 'bg-black',
};

const Hero = () => {
  const [heroData, setHeroData] = useState<HeroItem[]>([]);

  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/Apis/HelloWorld`);
        const data = res.data;
        const heroItems = data.message;
        setHeroData(heroItems);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load hero content');
      } 
    };

    fetchData();
  }, []);


  if (error) return <div className="h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="flex flex-col hero">
      <Swiper
        direction={'vertical'}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-screen"
      >
          <SwiperSlide key={'main-01'} className="relative">
                   <motion.div 
              className="absolute  p-6 left-0 top-[15%] flex flex-col gap-2 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {socialMediaArray.map((social, idx) => (
 
           <GlassButton color={social.color} icon = {social.icon}  key = {idx} />
   
              ))}
            </motion.div>
                  <div className="cnt-1 absolute inset-0 flex flex-col items-center justify-center text-center z-10 text-white px-4">
              <h1 className="tech text-4xl md:text-6xl font-bold mb-6">{'welcome '}</h1>
              <button className="btn-generale bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-sm transition-colors">
                {'Get Started'}
              </button>
            </div>
               <img 
                src='/hiz.jpg' 
                alt={`slider-01}`} 
                className="w-full h-full object-cover" 
              />
               

            </SwiperSlide>
        {heroData.map((item, index) => (
          
          <SwiperSlide key={index} className="relative">
            {/* Social media icons */}
            <motion.div 
              className="absolute  p-6 left-0 top-[15%] flex flex-col gap-2 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {socialMediaArray.map((social, idx) => (
 
           <GlassButton color={social.color} icon = {social.icon}  key = {idx} />
   
              ))}
            </motion.div>

            {/* Content */}
            <div className="cnt-1 absolute inset-0 flex flex-col items-center justify-center text-center z-10 text-white px-4">
              <h1 className="tech text-4xl md:text-6xl font-bold mb-6">{item.text}</h1>
              <button className="btn-generale bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-sm transition-colors">
                {item.BtnText}
              </button>
            </div>

            {/* Media */}
            {item.type === "image" ? (
              <img 
                src={item.src} 
                alt={`slider-${index}`} 
                className="w-full h-full object-cover" 
              />
            ) : item.type === "video" ? (
              <video 
                autoPlay 
                loop 
                muted 
                className="w-full h-full object-cover"
              >
                <source src={`${process.env.NEXT_PUBLIC_NEXTURL || ''}/${item.src}`} type="video/mp4" />
              </video>
            ) : null}
            
            {/* Overlay <div className="absolute inset-0 bg-black/30 z-0"></div> */}
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;