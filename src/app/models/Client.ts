import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  session_token: String,
  Pic : String,
  // Add other fields here
}, { collection: 'Clients' });

export const Client = mongoose.models.Client || mongoose.model("Client", ClientSchema);
