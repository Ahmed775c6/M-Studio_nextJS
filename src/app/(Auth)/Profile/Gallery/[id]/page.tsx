import UserSideBar from "@/app/Components/UserSideBar"
const page = ({params} : {params : {id : string}}) => {
    const {id} = params

    const Gallery = [{
        src  : '/Avatar.png',

    }]
  return (
 <>
 <section className="w-full flex  min-h-screen bg-[rgba(0,0,0,0.1)] h-[100%]">
 <UserSideBar/>
 <div className="user-content flex-1 flex-col p-4 relative">
      <h4 className="font-semibold text-white p-10">Gallery</h4>
    
    <div className="w-full h-[250px]">
      {Gallery.map((image : any,index)=>(
        <img src={image.src} key={index} alt={`${index}`}/>
      ))}
    </div>
    </div>
 </section>

 </>
  )
}

export default page