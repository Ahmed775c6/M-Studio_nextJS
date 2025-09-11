import { notFound  } from 'next/navigation';
import SocialMediaIcons from "@/app/Components/SocialMedia";
import InputOTPForm from "@/app/Components/V202";

const Verif = async({ params }: { params: { id: string } }) => {
 const {id} =await  params
 
      const utrl = process.env.GO_URL;
  
      const response = await fetch(`${utrl}/api/getToken101/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
   
      });

      if (response.ok) {

      }else{
       //change the location to /403 page
 notFound()
      } 
   
   
  

  return (<>

      <div className="w-full min-h-[100vh] flex justify-center">
      <div className="3d-baby w-full">
        <SocialMediaIcons />
      </div>
      <div className="flex w-full flex-col p-6 justify-center items-center">
        <InputOTPForm token={id} />
      </div>
    </div>
  </>

  );
};

export default Verif;