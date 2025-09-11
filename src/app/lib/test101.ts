import { createSession } from "@/app/lib/sessions";
export async function comOn(userId : string){
      await createSession(userId)
    
}