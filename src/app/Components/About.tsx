
import Moment from "./Moment"
import * as motion from "motion/react-client"
const About = () => {
  return (
<>
<section className=" w-full mt-4  about  justify-center gap-4">

<div className="w-full flex flex-col gap-0">
<div className="relative w-full flex  h-full zbbbb">
<div className="flex teams  relative w-full flex-col gap-4">

<motion.img 
  src="/nasrii.jpg" 
  className="team-2" 
  alt="team-2" 
  initial={{ opacity: 0  }} 
  whileInView={{ opacity: 1 , rotate : [0,-8,-8,-8] , x : 20 , y : -8 } } 
  viewport={{ once: true, amount: "all" }} 
  
/>

<div className="p-2 absolute flex gap-2 cursor-pointer  bg-pink-700 top-10 rounded-sm left-0 rotate-6 text-white  text-[12px]">
<i className='ri-instagram-line font-sans'></i> <span className='font-sans'>  @Med_Amine_Nasri</span>
</div>
</div>
<div className="flex teams relative flex-col gap-4 w-full">

  

<motion.img 
  src="/f7ija.jpg" 
  className="team-1" 
  alt="team-1" 
  initial={{ opacity: 0   }} 
  whileInView={{ opacity: 1 , rotate : [0,8,8,8] , x : -5 , y : 8 } } 
viewport={{once : true, amount : "all"}}
 
/>
<div className="p-2 absolute flex gap-2 cursor-pointer  bg-pink-700 top-10 rounded-sm left-10 -rotate-2 text-white  text-[12px]">
<i className='ri-instagram-line font-sans'></i> <span className='font-sans'>  @montassar___khalifa</span>
</div>
</div>


</div>

</div>

<div className="flex flex-col gap-4  p-2 w-full">
<div className=" text-white headtext relative">
  <div className="heading absolute -right-[80%] top-[30%] media-heading"></div>
  <div className="icons"></div>

      <h1>Why Us ?</h1>
      <h2>About us</h2>
     
    </div>
    <div className="flex w-full flex-col relative gap-2"     style={{margin : '10px 10px'}}>
    
    <div className="icons absolute "></div>
    <p className="text-white text-[24px]">Welcome to <span className="text-[var(--brown)]" style={{fontWeight :600}}>M-Studio</span>
    </p>
  <p className="text-white">  Where we capture moments that last a lifetime. Our team of professional photographers is dedicated to providing exceptional service and stunning imagery that tells your unique story. Whether it’s a wedding, family portrait, corporate event, or a personal photoshoot, we are committed to delivering results that exceed your expectations. Here’s why you should choose us:</p>

    </div>
    <p className="flex  text-white gap-4 "><span className="text-[var(--brown)]" style={{fontWeight : 800}}> + 10 Years</span> <span>Working Experience</span></p>
  <div className="w-full flex gap-4">
 
<ul className="flex flex-col w-full gap-2">
<li className="flex  gap-2 text-white"><i className="ri-arrow-right-s-fill text-[var(--brown)]"></i><span>Experienced Photographers</span></li>
<li className="flex  gap-2 text-white"><i className="ri-arrow-right-s-fill text-[var(--brown)]"></i><span>Personalized Service</span></li>
<li className="flex  gap-2 text-white"><i className="ri-arrow-right-s-fill text-[var(--brown)]"></i><span>High-Quality Equipment</span></li>

</ul>
<ul className="flex flex-col w-full gap-2">

<li className="flex  gap-2 text-white"><i className="ri-arrow-right-s-fill text-[var(--brown)]"></i><span>Flexible Packages</span></li>
<li className="flex  gap-2 text-white"><i className="ri-arrow-right-s-fill text-[var(--brown)]"></i><span>Creative Vision</span></li>
<li className="flex  gap-2 text-white"><i className="ri-arrow-right-s-fill text-[var(--brown)]"></i><span>Customer Satisfaction</span></li>

</ul>

  </div>
 
</div>

</section>
<Moment/>
</>
  )
}

export default About