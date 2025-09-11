import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env");
}

declare global {
    var mongoose: any;
}

let cached = global.mongoose || { conn: null, promise: null };

export const connectToDB = async () => {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "M_Studio", // Explicit database name
            bufferCommands: false,
        }).then(mongoose => {
            console.log(
                "Connected to MongoDB database:",
                mongoose.connection.db ? mongoose.connection.db.databaseName : "unknown"
            );
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
};