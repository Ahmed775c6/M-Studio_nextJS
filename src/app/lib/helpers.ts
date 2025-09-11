'use client'


const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null; // Skip during SSR
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};
export const getSession = async ()=>{


      const csrfToken = getCookie('csrf_token') ;
      
 if(csrfToken){
    console.log(csrfToken)
           const response = await fetch('http://localhost:8080/api/protected',{
      method: 'GET',
      credentials: 'include', 
      // Crucial: sends cookies automatically
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken, // Add token to header
        // Browser will automatically add the csrf_token cookie here
      },
   
      })
   return true   
  
 }
return 


  
}