import { NextResponse } from "next/server";
import { connectToDB } from "@/app/lib/database";
import { Client } from "@/app/models/Client";
import { verifySession } from "@/app/lib/sessions";
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  
  try {
    const session = await verifySession();
  
    await connectToDB();

    // Fetch user without field projection
    const user = await Client.findOne(
      { session_token: id },
      { password: 0,session_token : 0,csrf_token :0, verificationCode : 0,createdAt : 0,activationdAt : 0, activeAccount : 0,lastLogin : 0,status : 0,authToken :0, __v: 0 } // Exclude sensitive/irrelevant fields
    ).lean();

    if (!user) {
      return NextResponse.json({ error: "Client not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching client:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}