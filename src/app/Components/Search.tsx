
import { motion } from "framer-motion"
const handelSearch = async (e: React.FormEvent) => {
  e.preventDefault();
}
const Search = () => {



  return (
<motion.div className="flex fixed top-0 left-0  z-10 search-container justify-center flex-col w-screen"
initial = {{opacity : 0 , background : ''}}
animate = {{opacity :1 , background : "rgba(0,0,0,0.5)"}}
transition= {{delay: 0.1}}
>
<motion.form action='' onSubmit={handelSearch} className="w-full flex justify-center align-middle" 
     initial={{ y:-250  }}
     animate={{ y: 0 }}
     transition= {{delay: 0.1}}
     >
<input
  type="text"
  placeholder='Search ... '
  id='search'
  name='search'
  className='max-w-[80%] w-[40%] rounded-sm outline-none search-input p-4 bg-black/90 text-white lmx'
/>
  <button type='submit' className='bg-[var(--brown)] p-4 rounded-sm text-white cursor-pointer transition-all duration-300 font-semibold uppercase' style={{
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0
}}>Search</button>
</motion.form>
</motion.div>
  )
}

export default Search;