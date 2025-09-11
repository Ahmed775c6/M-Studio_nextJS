import React from 'react'
import axios from 'axios';


type User = {
  id: number;

    name: string;
    email: string;
    phone: string;
    password: string;
};
const page =async () => {
    const Backend = process.env.GO_URL;
   
 const res = await axios.get(`${Backend}/api/users`);
;
 const users = res.data;
  return (
<>
{
users.map((user : User, index : number)=>{
    return (
        <div key={index} className="user-card">
            <p > {user.id} </p>
        <p className="user-name">{user.name}</p>
        <p className="user-email">{user.email}</p>
        <p className="user-phone">{user.phone}</p>
        <p className="user-password">{user.password}</p>
        </div>
    )
})
}

</>
  )
}

export default page;