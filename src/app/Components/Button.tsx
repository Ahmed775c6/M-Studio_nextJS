'use client';

const Button = ({ onAction }: { onAction: () => void }) => {
  return (
<button className="p-2 bg-blue-900 text-white" onClick={()=>{
   onAction()
}}>click</button>
  )
}

export default Button