

const Logout = () => {
  const handellogout = async()=>{
    const res = await fetch('/api/logout',{
        method : "POST"
    })
  }
  return (
<>
<form onSubmit={handellogout}>
    <button type="submit" className="bg-red-400 text-white" >Logout</button>
</form>

</>
  )
}

export default Logout