import Image from "next/image"

const Moment = () => {
  return (
  <>
<div className="flex w-full gap-4  relative flex-col text-white">

<h1 className="title-2 text-center w-full ">Our Passion == Your Moment</h1>
  <div className="grid p-6 grid-cols-3 w-full gap-4 mom relative">
    <img src="/piece-art-beautiful-blonde-woman.jpg" alt="sun"  className="w-full" />

    <div className="goal flex flex-col w-full gap-4 p-6 justify-center align-bottom text-center">
<h2  className="uppercase text-[30px] text-[var(--brown)] font-semibold" style={{fontWeight:600}}>Our Goal</h2>
<p>We would like to give you a unique experience, built to serve you best and capture your special moments for you and your families creatively and beautifully.</p>
<ul>
    <li><i className="ri-arrow-right-s-fill text-[var(--brown)]"></i> Bridal & Wedding</li>
    <li><i className="ri-arrow-right-s-fill text-[var(--brown)]"></i> Couples & Engagement</li>
    <li><i className="ri-arrow-right-s-fill text-[var(--brown)]"></i> Event Covering</li>
    <li> <i className="ri-arrow-right-s-fill text-[var(--brown)]"></i> Family & Children</li>
    <li><i className="ri-arrow-right-s-fill text-[var(--brown)]"></i> Graditaion</li>
</ul>
<p className="p-4 rounded-sm bg-[rgba(0,0,0,0.5)] text-white">And many more ..., See for your self bellow .</p>
    </div>
    <img src="/side-view-romantic-couple-outdoo.png" alt="hair"  className="w-full" />
  </div>
</div>
  </>
  )
}

export default Moment