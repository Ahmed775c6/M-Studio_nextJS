
import Link from "next/link"
type TokenProps = {
  token: string;
}
const Verifications = ({token } : TokenProps) => {
  return (
 <div className="flex fixed w-full justify-center min-h-[100vh] align-middle items-center  h-[100vh] top-0 left-0  bg-[rgba(0,0,0,0.3)] z-50">

    <div className="w-full flex flex-col gap-4 bg-[rgba(0,0,0,0.8)] mt-20 text-white p-10 relative max-w-[700px] rounded-sm  " >

   
    <div className="flex flex-col z-50 gap-2 justify-end    absolute bottom-10 right-10">
            <p>Verify your Account</p>
<Link href={`Verify/${token}`} className="bg-[var(--brown)] rounded-sm p-2 flex justify-center"> 👉 Verify</Link>
       
        </div>
        <img src="/success.png" alt="success" width={100} className="justify-center flex " />
        <h3 className="w-full text-[var(--brown)] text-[24px] font-bold">Successfuly created your Account </h3>
    <div className="w-full flex flex-col">
    <p>You recived a 6 Digit code in your Email  .</p>
            <p>Please Verify Your Account  </p>
    </div>
            <p> thnx for your patient ✌️😁</p>
  
       
    
    </div>

 </div>
  )
}

export default Verifications