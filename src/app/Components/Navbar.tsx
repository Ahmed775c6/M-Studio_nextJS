'use client';
import {  useState ,useEffect } from 'react'
import Search from "./Search";
import Link from 'next/link';

interface User {
  _id: string;
  prf: string;
  email : string,
}


const Navbar = () => {
 
const [searching, setSearching] = useState(false);
const [isScrolled, setIsScrolled] = useState(false);
const [show,setshow] = useState(false);

const [user, setUser] = useState<User | null>(null);



useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
     
      
     
    }
  };

  window.addEventListener('scroll', handleScroll);


  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
<>
{
      searching ? 
      <>
      <Search/> 
            <nav className="flex navbar w-full   p-4"  >
<div className="flex gap-2">
  <img src="/logo_we.png" alt="logo" className="logo" />


</div>

<div className="flex aby justify-center gap-2">
<ul className="flex flex-row  gap-2">
    <li className="active"><Link href="/">Home</Link></li>
    <li><Link href="/gellery">Gellery  </Link></li>
   

    <li><Link href="/Contact">contact</Link></li>
</ul>
{
  !searching ? <i className="ri-search-line s-icon" id="open" onClick={()=>{
    setSearching(!searching);
}}></i> : <i className="ri-close-line s-icon" id="close" onClick={()=>{
  setSearching(!searching);
}}></i>
}
<div className="flex btn justify-center"> <i className="ri-calendar-line"></i><span>Booking</span></div>
<div className="flex btn justify-center"> <i className="ri-user-line"></i><span>Sign up</span></div>

<i className="ri-bar-chart-horizontal-line"></i>
</div>

</nav>
      </>
      : 
      <>
      <span className={isScrolled ? `flex flex-col w-[50px] fixed bg-[var(--brown)] text-white right-5 cursor-pointer to-top  h-[50px] rounded-full z-10 justify-center align-middle text-center active` : 'hidden'  }
onClick={()=>{
  window.scrollTo(0,0);
}}>
<i className="ri-corner-left-up-line"></i>

</span>
<nav className={isScrolled  ? 'bg-black scrolled flex navbar w-screen   p-4' : ` flex  navbar   w-screen   p-4 transition-all`}  >
      <Link href={"/"} className="flex gap-2">
        <img src="/logo_we.png" alt="logo" className="logo" />
        <h1 className='p-4 text-3xl text-[var(--brown)]'>M-Studio</h1>
      </Link>
      <div className="flex aby justify-center gap-2">
      <ul className="flex flex-row ul_nav gap-2">
          <li className="active"><Link href="/">Home</Link></li>
          <li><Link href="/gellery">Gellery</Link></li>
          <li><Link href="/aboutus">About us</Link></li>
          <li><Link href="/services">Services</Link></li>   
          <li><Link href="/blog">Blogs</Link></li>
          <li><Link href="/Contact">contact</Link></li>
      </ul>
      {
        !searching ? <i className="ri-search-line s-icon" id="open" onClick={()=>{
          setSearching(!searching);
      }}></i> : <i className="ri-close-line s-icon" id="close" onClick={()=>{
        setSearching(!searching);
      }}></i>
      }
      <div className="flex btn justify-center" onClick={()=>{
        window.location.href = "/#booking"
      }}> <i className="ri-calendar-line"></i><span>Booking</span></div>
      {
        !user   ?       <div className="flex btn justify-center" onClick={()=>{
          window.location.href = '/signup';
        }} > <i className="ri-user-line"></i><span>Sign up</span></div> : <>
        <i className='ri-notification-line' onClick={()=>{
       show ?  setshow(false) : setshow(true);
        }}></i> 
{
  show ?        '': ''
}
        
        <Link href={`/profile?id=${user._id}`}>
        <img src={`http://localhost:3000/${user.prf}`} alt="avatar" className="w-10 h-10 p-0 mt-3 cursor-pointer rounded-full" /></Link></>
      }

      
      <i className="ri-bar-chart-horizontal-line"></i>
      </div>
      
      </nav>
      </>
 

    }

</>
  )
}

export default Navbar