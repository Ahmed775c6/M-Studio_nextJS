
import UserSideBar from "@/app/Components/UserSideBar"
const page = ({params} : {params : {id : string}}) => {
  return (
 <>
 <section className="w-full flex  min-h-screen bg-[rgba(0,0,0,0.1)] h-[100%]">
    <UserSideBar/>
     <div className="w-full flex flex-col gap-4 flex-1 h-full p-10 min-h-[100vh]">
<h2 className="text-white">Notifications : </h2>
</div>
 </section>

 
 </>
  )
}

export default page