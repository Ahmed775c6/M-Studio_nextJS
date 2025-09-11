'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation , Autoplay } from 'swiper/modules';
import ClientCard from './ClientCard';
const testimonials = [
    {
      img: '/sarad.jpg',
      text: "This is some testimonial text for this month's CodePen challenge! This is some testimonial text for this month's CodePen challenge!",
      source: 'Oumayama 117',
    },
    {
      img: 'https://placehold.co/100',
      text: "Another testimonial text for this month's CodePen challenge! This is another testimonial text for this month's CodePen challenge!",
      source: 'Testimonial Source 2',
    },
    {
     
        img: '/nasri.jpg',
      text: "Yet another testimonial text for this month's CodePen challenge! This is yet another testimonial text for this month's CodePen challenge!",
      source: 'Mouhamed Amine Nasri',
    },
    {
     
        img: '/mootez.jpg',
      text: "Yet another testimonial text for this month's CodePen challenge! This is yet another testimonial text for this month's CodePen challenge!",
      source: 'Mootez Khlifa',
    },
    {
     
        img: '/mouhanned.jpg',
      text: "Yet another testimonial text for this month's CodePen challenge! This is yet another testimonial text for this month's CodePen challenge!",
      source: 'Mouhanned Khlifa',
    },
    {
     
        img: '/longHair.jpg',
      text: "Yet another testimonial text for this month's CodePen challenge! This is yet another testimonial text for this month's CodePen challenge!",
      source: 'Ilyess Massoudi',
    },
    
  ];


    


const Testimonial = () => {
  return (
<>
<section className=" w-full clienrs flex flex-col mt-4 gap-4">
<h1 className="title-2 text-center z-10 w-full  ">Take it from our Clients</h1>


    <>
      <Swiper
       spaceBetween={10}
        speed={1800}
        parallax={true}
        autoplay={{
            delay: 1800,
            disableOnInteraction: true,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper  gap-4 p-4 flex w-full relative"
      >
           {testimonials.map((testimonial, index) => (
   <SwiperSlide key={index}>   
    <ClientCard
     key={index}
          img={testimonial.img}
          text={testimonial.text}
          source={testimonial.source}
        /></SwiperSlide>
      ))}
      </Swiper>
    </>

  
</section>



</>
  )
}

export default Testimonial