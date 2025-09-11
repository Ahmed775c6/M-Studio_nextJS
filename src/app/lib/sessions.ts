import 'server-only'
import {SignJWT,jwtVerify} from 'jose'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
const key = new TextEncoder().encode(process.env.SECRET)
const coockie = {
    name : "session",
    options : {httpOnly : true , secure : true , sameSite : "lax" as const , path : "/"},
    duration : 24 * 60 * 60 * 1000,

}
export async function encrypt(payload :any){
return new SignJWT(payload)
.setProtectedHeader({alg : 'HS256'})
.setIssuedAt()
.setExpirationTime("1day")
.sign(key)
}

export async function decrrypt(session : any) {
    try{
const {payload} = await jwtVerify(session,key,{
    algorithms : ["HS256"]
})
return payload
    }catch(err){
        console.log(err)
        return null
    }
}
export async function createSession(userID : string){ 
const expires = new Date(Date.now() + coockie.duration)
const session = await encrypt({userID , expires})
const cookieStore = await cookies();
cookieStore.set(coockie.name , session ,{ ...coockie.options , expires})
redirect(`/Profile/info/${userID}`)
}
export async function verifySession(){
    const cookie = (await cookies()).get(coockie.name)?.value 
    const session = await decrrypt(cookie)
    if(!session?.userID){
        redirect('/Login')
    }
    return {userId : session.userID}
}
export async function deleteSession(){
    (await cookies()).delete(coockie.name)
    redirect('/Login')
}