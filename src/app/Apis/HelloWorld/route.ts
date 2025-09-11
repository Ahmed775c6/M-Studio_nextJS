import { NextResponse } from "next/server";

export async function GET() {
return NextResponse.json({
  message: [{
  "_id": {
    "$oid": "675b42cde7124f5cf70c1c5c"
  },
  "src": "/39.jpg",
  "type": "image",
  "Admin": {
    "id": {
      "$oid": "675b38bd157078bec3f94125"
    },
    "name": null
  },
  "text": "Catch your best Moments",
  "BtnText": "Book Now",
  "DateAddition": "2024-12-12 21:8:45",
  "Section": "HERO"
},
{
  "_id": {
    "$oid": "675b42f9e7124f5cf70c1c5d"
  },
  "src": "/39.jpg",
  "type": "image",
  "Admin": {
    "id": {
      "$oid": "675b38bd157078bec3f94125"
    },
    "name": null
  },
  "text": "what ur waiting for , make your bookings & wait for the experience !",
  "BtnText": "Contact us ",
  "DateAddition": "2024-12-12 21:9:29",
  "Section": "HERO"
}
], 

})   }
export async function POST(req: Request) {
    const body = await req.json();
 
    

return NextResponse.json({
  message: `hello ${body.name }!`,
});
}