
import Link from "next/link"

const AccountOpen = () => {
  return (
 <div className="flex fixed w-full justify-center min-h-[100vh] align-middle items-center  h-[100vh] top-0 left-0  bg-[rgba(0,0,0,0.3)] z-50">

    <div className="w-full flex flex-col gap-4 bg-[rgba(0,0,0,0.8)] mt-20 text-white p-10 relative max-w-[700px] rounded-sm  " >

   
    <div className="flex flex-col z-50 gap-2 justify-end    absolute bottom-10 right-10">
            <p> Request procedet </p>
<Link href={"/login"} className="bg-[var(--brown)] rounded-sm p-2 flex justify-center"> 👉 Login</Link>
       
        </div>
        <img src="/success.png" alt="success" width={100} className="justify-center flex " />
        <h3 className="w-full text-[var(--brown)] text-[24px] font-bold">Your account has been successfully verified </h3>
    <div className="w-full flex flex-col">
    <p>You can now login to your profile  .</p>
         
    </div>
            <p> thnx for your patient ✌️😁</p>
  
       
    
    </div>

 </div>
  )
}

export default AccountOpen