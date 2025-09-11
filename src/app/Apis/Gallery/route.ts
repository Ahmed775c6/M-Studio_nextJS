import { NextResponse } from "next/server";

export async function GET() {
return NextResponse.json({
  message: [
{
  "_id": {
    "$oid": "675b433ce7124f5cf70c1c5e"
  },
  "title": "xx",
  "category": "dekjek",
  "imageUrl": "zbour.jpg",
  "PostBy": "Admin",
  "Date": "2024-12-12 21:10:36"
},{
  "_id": {
    "$oid": "675b4492e7124f5cf70c1c5f"
  },
  "title": "tkhrj",
  "category": "graduation",
  "imageUrl": "wm.jpg",
  "PostBy": "Admin",
  "Date": "2024-12-12 21:16:18"
},{
  "_id": {
    "$oid": "675b44ade7124f5cf70c1c60"
  },
  "title": "wome",
  "category": "life",
  "imageUrl": "wrd.jpg",
  "PostBy": "Admin",
  "Date": "2024-12-12 21:16:45"
}
], 

})   }