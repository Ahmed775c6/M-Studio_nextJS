import { cookies } from 'next/headers'

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "TEST0101 | Overwiew",
  description: "Dashboard Overview Page",
};


const page = async() => {
  
  const cookie = (await cookies()).get('csrf_token')?.value
const cookie2 = (await cookies()).get('session_token')?.value

 const res = await fetch(`http://localhost:3000/Apis/user/${cookie2}`)
 const result = await res.json()
 console.log(result)
  return (
<>
    <div className="text-3xl text-white">Overwiew p101  </div>
<p className='text-white'> name : {result.name} </p>

</>
  )
}

export default page