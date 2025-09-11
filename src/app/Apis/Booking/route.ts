import { connectToDB } from "@/app/lib/database";
import Book from "@/app/models/book";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        // Establish connection first
        const db = await connectToDB();
      //  console.log("Using collection:", db.collection("bookings").collectionName);

        const body = await request.json();
        const { name, L_name, Gmail, event, date, phone, request: userRequest, hasAccount } = body;

        // Create new booking document
        const newBooking = new Book({
            name,
            L_name,
            Gmail,
            event,
            date: new Date(date), // Ensure proper date format
            phone,
            request: userRequest,
            hasAccount: Boolean(hasAccount)
        });

        // Save to database
        const savedBooking = await newBooking.save();
        console.log("Booking saved with ID:", savedBooking._id);

        return NextResponse.json(
            { 
                message: "Booking created successfully",
                bookingId: savedBooking.name 

            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Full error details:", error);
        return NextResponse.json(
            { 
                error: "Failed to create booking",
                details: error.message,
                stack: process.env.NODE_ENV === "development" ? error.stack : undefined
            },
            { status: 500 }
        );
    }
}