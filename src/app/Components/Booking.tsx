'use client';
import {useEffect, useState } from "react";

import SubmitBtn from "./SubmitBtn";
import SucessBooking from "./SuccessBooking";

import { io } from 'socket.io-client';
const SOCKET_SERVER_URL = "http://localhost:3000";
const socket = io(SOCKET_SERVER_URL, {
  transports: ['websocket'], // Use WebSocket transport
  withCredentials: true, // Allow credentials if needed
});

socket.on("connect", () => {
  console.log("Connected to Socket.IO server");
});

// Example of sending a message
socket.emit('message', { data: 'Hello from React!' });

// Example of receiving messages
socket.on('message', (data) => {
  console.log('Message from server:', data);

})





const FooterContactSection = () => {
  return (
    <div className="row gy-4 grid grid-cols-1 gap-[40px] justify-content-xxl-between justify-content-center">
      <div className="col-xxl-4 col-lg-6 w-full">
        <div className="footer-contact-wrap title-anim flex w-full gap-[60px]" style={{ perspective: '400px' }}>
          <div style={{ display: 'block', textAlign: 'start', position: 'relative', transform: 'translate3d(0px, 0px, 0px)', opacity: 1 }}>
            <div className="footer-contact-icon">
              <img src="/location-icon.svg" alt="icon" />
            </div>
          </div>
          <div style={{ display: 'block', textAlign: 'start', position: 'relative', transform: 'translate3d(0px, 0px, 0px)', opacity: 1 }}>
            <div className="footer-contact-details">
              <h4 className="title">Office Address</h4>
              <p className="footer-contact-text">Sunday, Sept. 18th 2022. One World Observatory, 285 Fulton Street</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-lg-6 w-full">
        <div className="footer-contact-wrap flex w-full title-anim gap-[60px]" style={{ perspective: '400px' }}>
          <div style={{ display: 'block', textAlign: 'start', position: 'relative', transform: 'translate3d(0px, 0px, 0px)', opacity: 1 }}>
            <div className="footer-contact-icon">
              <img src="/envelope.svg" alt="icon" />
            </div>
          </div>
          <div style={{ display: 'block', textAlign: 'start', position: 'relative', transform: 'translate3d(0px, 0px, 0px)', opacity: 1 }}>
            <div className="footer-contact-details">
              <h4 className="title">Email Address</h4>
              <span className="footer-contact-link">
                <a href="mailto:info@ovation-wedding.com">info@ovation-wedding.com</a>
                <a href="mailto:live-event@ovation.com">live-event@ovation.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-4 col-lg-6 w-full">
        <div className="footer-contact-wrap w-full flex gap-[60px] title-anim" style={{ perspective: '400px' }}>
          <div style={{ display: 'block', textAlign: 'start', position: 'relative', transform: 'translate3d(0px, 0px, 0px)', opacity: 1 }}>
            <div className="footer-contact-icon">
              <img src="/phone.svg" alt="icon" />
            </div>
          </div>
          <div style={{ display: 'block', textAlign: 'start', position: 'relative', transform: 'translate3d(0px, 0px, 0px)', opacity: 1 }}>
            <div className="footer-contact-details">
              <h4 className="title">Phone Numbers</h4>
              <span className="footer-contact-link flex flex-col gap-2 p-2">
                <a href="tel:2581592121536">+216 15-921-216</a>
              <a href="tel:856215215692">+216 21-521-569</a>
                <a href="tel:856215215692">+216 21-521-565</a>
              </span>
                
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
interface User {
  _id: string;
  prf: string;
  fullName : string;
  email : string,
  phone : string,
  
}

const Booking = () => {
 
const [user, setUser] = useState<User | null>(null);


const [bookData, setBookData] = useState({
  name: '',
  L_name: '',
  Gmail: '',
  event: '',
  date: '',
  phone: '',
  request: '',
  hasAccount : false,
  _id : '',
 
});


useEffect(() => {
  if (user) {
    console.log('user: ', user);
    setName(user.fullName)
    // Update bookData with user information if user is not null
    setBookData({
      name: user.fullName,
      L_name: '', // Assuming last name is not available in user object
      Gmail: user.email,
      event: '',
      date: '',
      phone: user.phone,
      request: '',
      hasAccount : true,
      _id : user._id
    });
  }else{
    console.log('no user');
  }
}, [user]); // Run this effect when user changes


  const [name, setName] = useState('');

  const [loading, setLoading] = useState(false);
  const [sucess,setSucess]= useState(false);
  const [NameApi,setNameApi] = useState('');






  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
      const res = await fetch('/Apis/Booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setLoading(false);
      setSucess(true);
    
      socket.emit('newBookingRequest', { data: bookData });
      setNameApi(data.bookingId);
    } catch (error) {
      console.log("error : ", error);
    }

  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  return (
    <>
      <section id="booking" className="booking w-full flex-row-reverse flex">
        {sucess ? <SucessBooking name={NameApi} Onclose={() => { setSucess(false); return true; }} /> : ''}
        <div className="3d-object p-2 w-[100%]">
          <img src="/wm.jpg" alt="zb" className="w-full rounded-sm" />
        </div>
        <div className="booking-form w-[100%] gap-4 flex flex-col p-4">
          <h1 className="book-t flex gap-2">
            <i className="ri-calendar-line"></i>Booking
          </h1>
          <span className="text-[var(--brown-for-orange)]" style={{ fontWeight: 600 }}>
            All * Fields are required
          </span>
          <form onSubmit={handleBooking} className="text-white flex flex-col w-full gap-4">
            <div className="grid grid-cols-2 w-full gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">
                  Your Name <span className="text-[var(--brown)]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  className="p-2"
                  value={name}
                  onChange={(e) => {
                    handleChange(e);
                    setName(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="L_name">
                  Your Last Name <span className="text-[var(--brown)]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="L_name"
                  id="L_name"
                  className="p-2"
              
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="Gmail">
                  Your Email Address <span className="text-[var(--brown)]">*</span>
                </label>
          {
            user ?       
            <input
            type="text"
            name="Gmail"
            id="Gmail"
            className="p-2  cursor-not-allowed" style={{background : 'green !important'}}
            value={user?.email}
  disabled
            required
          /> :       <input
          type="text"
          placeholder="Hermes@gmail.com"
          name="Gmail"
          id="Gmail"
          className="p-2"
         
          onChange={handleChange}

          required
        />
          }
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="event">
                  Your Event <span className="text-[var(--brown)]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Example: Wedding"
                  name="event"
                  id="event"
                  className="p-2"
          
                  onChange={handleChange}

                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="date">
                  Pick a Date <span className="text-[var(--brown)]">*</span>
                </label>
                <input
                  type="date"
                  placeholder="mm/dd/yy"
                  name="date"
                  id="date"
                  className="p-2 text-white"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone">
                  Your Phone number <span className="text-[var(--brown)]">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Example: 25 743 292"
                  name="phone"
                  id="phone"
                  className="p-2 text-white"
    value={bookData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="request">
                What you have in mind {name}? (optional)
              </label>
              <textarea
                name="request"
                id="request"
                className="outline-none h-40 text-white p-2"
                placeholder="Any Special requests or details"
                onChange={handleChange}
              ></textarea>
            </div>
            <SubmitBtn isLoading={loading} text={"SEND"}  />
            <FooterContactSection />
          </form>
        </div>
      </section>
    </>
  );
};

export default Booking;
