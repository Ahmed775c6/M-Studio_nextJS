import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    L_name: { type: String, required: true },
    Gmail: { type: String, required: true },
    event: { type: String, required: true },
    date: { type: Date, required: true },
    phone: { type: String, required: true },
    request: { type: String },
    hasAccount: { type: Boolean, default: false }
}, { 
    collection: "bookings" // Explicit collection name
});

// Check if model already exists to prevent recompilation
const Book = mongoose.models.Book || mongoose.model("Book", BookSchema);

export default Book;