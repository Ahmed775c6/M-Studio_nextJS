'use client'
import  { useState } from 'react'


const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null; // Skip during SSR
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};
const Test101 = () => {
  const [message, setMessage] = useState('')
   const csrfToken = getCookie('csrf_token');
const [Yes,setYes] = useState(false)    
    if (!csrfToken) {
        console.log('CSRF token missing!');
      return;
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // Retrieve CSRF token from cookies


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

      if (response.ok) {
        setMessage('Access granted to protected resource!')
        setYes(true)
      } else {
        const errorText = await response.text()
        setMessage(`Error: ${errorText}`)
      }
    } catch (error) {
      setMessage(`Network error: ${(error as Error).message}`)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Access Protected Resource</button>
      </form>
      {message && <div>{message}</div>}
    </div>
  )
}

export default Test101