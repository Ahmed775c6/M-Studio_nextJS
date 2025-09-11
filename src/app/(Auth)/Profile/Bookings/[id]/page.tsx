'use client'
import { useState } from "react";
import UserTabel from "@/app/Components/UserTabel";
import SubmitBtn from "@/app/Components/SubmitBtn";
import UserSideBar from "@/app/Components/UserSideBar";
const page =  ({params} : {params : {id : string}}) => {
    const {id} =  params;


const [name, setName] = useState('');
const [loading, setLoading22] = useState(false);
const [newReq,setNewReq] = useState(false);
const [BookPhone ,setBookPhone] = useState('');
const [Bookings,setBookings] = useState([])

  const [bookData, setBookData] = useState({
    name: name,
    L_name: '',
    Gmail: '',
    event: '',
    date: '',
    phone: "", // Initialize with BookPhone
    request: '',
  });
const [suces,setSucess] = useState(false);



  const handleBooking = async (e:any) => {
    e.preventDefault();
   // await valid();
    setLoading22(true);
    try {
      const res = await fetch('/api/BookingRequestActive', {
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
      setLoading22(false);
      setNewReq(false);
data.message === 1 ? setSucess(true) : setSucess(false);
      return data;
    } catch (error) {
      console.log("error : ", error);
    }

  };
  const handleChange = (e:any) => {
    const { name, value } = e.target;

    setBookData({
      ...bookData,
      [name]: value,
    });


  };
    const handleChangeph = (e:any) => {
    const { name, value } = e.target;
setBookPhone(value);
    setBookData({
      ...bookData,
      [name]: value,
    });


  };

  return (
<>
<section className="w-full flex  min-h-screen bg-[rgba(0,0,0,0.1)] h-[100%]">  
     <UserSideBar/>
     <div className="user-content min-h-[100vh] flex-1 relative">
       
      <h4 className="font-semibold text-white p-10">Bookings</h4>
      {
  newReq ? <div className="w-full fixed top-0 left-0 bg-[rgba(0,0,0,1)] z-10">
<div className="w-10 h-10 z-10 p-2 text-white text-[22px] absolute right-0 top-0  cursor-pointer flex justify-center align-middle text-center items-center" onClick={()=>{
    setNewReq(false);
  }} ><i className="ri-close-large-line"></i></div>
<div className="booking-form w-[100%] gap-4 flex flex-col p-4 ] h-[100vh]">
          <h1 className="book-t flex gap-2">
            <i className="ri-calendar-line"></i>Booking
          </h1>
          <span className="text-[var(--brown-for-orange)]" style={{ fontWeight: 600 }}>
            All * Fields are required
          </span>
          <form onSubmit={handleBooking} className="text-white flex flex-col w-full gap-4">
            <div className="grid grid-cols-3 w-full gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">
                  Your Name <span className="text-[var(--brown)]">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  className="p-2 xxxx "
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
                  className="p-2 xxxx"
                  onChange={handleChange}
                  required
                />
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
                  className="p-2 xxxx"
                  list="event-options" 
                  onChange={handleChange}

                  required
                />
                 <datalist id="event-options">  

<option value="Wedding" />

<option value="Birthday" />
<option value="Conference" />

<option value="Concert" />

<option value="Other" />

</datalist>
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
                  className="p-2 text-white xxxx"
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
                  className="p-2 text-white xxxx"
value={BookPhone}
                  onChange={handleChangeph}
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
                className="outline-none h-30 text-white p-2 xxxx"
                placeholder="Any Special requests or details"
                onChange={handleChange}
              ></textarea>
            </div>
            <SubmitBtn isLoading={loading} text="SEND"  />
        
          </form>
        </div>
</div> :''
}

      { Bookings && Bookings.length > 0  ? 
<>
<div className="w-full p-4 flex flex-col gap-4">


<button className="p-4 flex justify-center text-center items-center text-white bg-[var(--brown)] cursor-pointer rounded-sm outline-none " onClick={()=>{
  setNewReq(true);
}}>Make a Booking </button>
<div className="flex w-full flex-col ">
<UserTabel data = {Bookings} />
</div>

</div>




</>
      :<div className="w-full p-4">
      <h2 className="text-white p-4">You didn"t make any booking request yet !</h2>
      
      <button className="p-4 flex justify-center text-center items-center text-white bg-[var(--brown)] cursor-pointer rounded-sm outline-none " onClick={()=>{
        setNewReq(true);
      }}>Make a Booking </button>
   
      
      </div> }
    </div></section>
 

</> 
  )
}

export default page