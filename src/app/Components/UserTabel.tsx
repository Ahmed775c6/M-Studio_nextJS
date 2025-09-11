'use client'

import { useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const UserTabel = (data :  any) => {

    const [Fetch,setFetch] = useState('All');
    const Opts = ["All" , "Confirmed","Pending", "Cancelled"];
  return (
<>
<div className="w-full flex justify-between flex-col gap-2">

<div className="flex justify-center w-full gap-4 text-white bg-[rgba(0,0,0,0.2)] p-2">
{
    Opts.map((item,index)=>(
        <button 
        key={index}
        className={`p-1 rounded-sm  cursor-pointer ${item === Fetch ? 'bg-black p-2 text-white' : ''}`} 
        onClick={()=>{
            setFetch(item);
        }}>
            {item}
        </button>
    ))
}
</div>
 </div>
<Table className=" rounded-sm  bg-[rgba(0,0,0,.4)] text-white">
            <TableCaption>A list of your recent Bookings.</TableCaption>
            <TableHeader className="bg-[var(--brown)] text-white">
                <TableRow>
                    <TableHead>Name</TableHead>
                
                    <TableHead>Event</TableHead>
                    <TableHead>Event Date</TableHead>
          
                 
                    <TableHead>Request Date</TableHead>
                    <TableHead>Stauts</TableHead>
                
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.data.map((row :any, index : any) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium">{row.name} {row.L_name}</TableCell>
                   
                        <TableCell>{row.event}</TableCell>
                        <TableCell>{row.date}</TableCell>
                     
                     
                        <TableCell>{row.FinalDate || 'N/A'}</TableCell>
                        <TableCell className="flex justify-between gap-2">{row.Confirmed} <i className="ri-edit-line bg-orange-400 text-white w-5 flex justify-center text-center  cursor-pointer h-5 rounded-sm" ></i> </TableCell>
                       
                    </TableRow>
                ))}
            </TableBody>
        </Table>

  

</>
  )
}

export default UserTabel