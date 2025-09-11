

const SucessBooking = ({name, Onclose}: {name: string; Onclose: () => boolean}) => {
    const ReqName = name;

  return (
 <>
 <div className="flex fixed w-full justify-center min-h-[100vh] align-middle items-center  h-[100vh] top-0 left-0  bg-[rgba(0,0,0,0.3)] z-50">

    <div className="w-full flex flex-col gap-4 bg-[rgba(0,0,0,0.8)] mt-20 text-white p-10 relative max-w-[700px] rounded-sm  " >
    <i onClick={()=>{
        Onclose();
    }}
    className="ri-close-large-line absolute right-10 top-10 text-[25px] z-50 cursor-pointer" id="close-popup-sucess"></i>
    <div className="flex flex-col z-50 gap-2 justify-end    absolute bottom-10 right-10">
            <p>Signup For free</p>
            <a href="/signup" className="bg-[var(--brown)] rounded-sm p-2 flex justify-center" >Signup</a>
        </div>
        <img src="/success.png" alt="success" width={100} className="justify-center flex " />
        <h3 className="w-full text-[var(--brown)] text-[24px] font-bold">Your Request Have been Send succefully </h3>
    <div className="w-full flex flex-col">
    <p>our Costumer service will call in just few minutes to confirme your booking .</p>
            <p>if we couldn't reach you an Email will be send to update you about your booking status</p>
    </div>
            <p> thnx for your patient</p>
  
        <p>See you soon {ReqName} ✌️😁</p>
    
    </div>

 </div>
 
 </>
  )
}

export default SucessBooking