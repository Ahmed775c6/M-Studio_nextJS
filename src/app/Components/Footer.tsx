import Image from 'next/image';
import Link from 'next/link';
import GlassButton from './GlassyButtons';
import { motion } from 'framer-motion';
const socialMediaArray = [
    { icon: 'ri-instagram-line', url: 'https://instagram.com', color: '#E1306C' },
    { icon: 'ri-facebook-line', url: 'https://facebook.com', color: '#3b5998' },
    { icon: 'ri-tiktok-line', url: 'https://tiktok.com', color: '#000' },
    { icon: 'ri-whatsapp-line', url: 'https://whatsapp.com', color: '#25D366' },
    { icon: 'ri-telegram-line', url: 'https://telegram.org', color: '#0088CC' },
];

const Footer = () => {
  return (
    <>
      <footer className="w-screen relative gap-2 justify-center p-[20px] fffff grid grid-cols-3">
        <div className="logo-and-time w-full flex flex-col gap-2 justify-center relative">
          <p className="absolute top-[40%] dfr medAm z-10 text-[var(--brown)]  right-[40px] marcker">M-Studio</p>
          <Image 
            src="/logo_we.png" 
            alt="logofooter" 
            width={250} 
            height={0} 
            className="w-[250px]"
            style={{ height: 'auto' }}
          />
          
          <div className="time flex flex-col w-full justify-center gap-2">
            <div className="flex flex-col gap-2">
              <p className="flex text-white w-full gap-2">Monday - Friday :</p>
              <span className="text-[var(--brown)]">8am - 6pm</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex text-white w-full gap-2">Saturday - Sunday :</p>
              <span className="text-[var(--brown)]">9am - 3pm</span>
            </div>
          </div>
        </div>
        
        <div className="tags-and-links text-white flex flex-col gap-4 p-4 w-full">
          <h3 className="font-semibold">Tags & Helpful Links</h3>
          <ul className="tags flex flex-wrap w-full gap-2">
            <li><Link href="/Dev">Make your own app</Link></li>
            <li><Link href="/Design">Contact Our Designer</Link></li>
            <li><Link href="/Blog">Our Posts</Link></li>
            <li><Link href="/Saller">Comercail</Link></li>
            <li><Link href="/Gallery">Gellery</Link></li>
            <li><Link href="/Design">Contact Our Designer</Link></li>
            <li><Link href="/Blog">Our Posts</Link></li>
            <li><Link href="/Saller">Comercail</Link></li>
            <li><Link href="/Gallery">Gellery</Link></li>
          </ul>
          
          <div className="nas-io relative">
            <h3 className="font-semibold mb-2">Join Our Comunity</h3>
            <span>Follow the link : </span>
            <a 
              href="https://nas.io/d?noRedirect=true&communityLink=d" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              UI/UX Comunity
            </a>
                          <motion.div 
              className="  p-6  flex flex-inline gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {socialMediaArray.map((social, idx) => (
 
   <></>
   
              ))}
            </motion.div>
                    <img 
            src="/yuy.png" 
            alt="Hermes" 
            width={0}
            height={0}
            className="absolute w-[30%] right-0 -bottom-10 "
            style={{ width: '30%', height: 'auto' }}
          />
          </div>
        </div>
        
        <div className="sub-and-contact w-full flex flex-col gap-4 p-4 text-white relative">
          <h3 className="font-semibold">Subscribe to Our NewsLEtter</h3>
          <form action="/subscribe" method="POST" className="flex justify-start w-full">
            <i className="ri-google-line p-3 w-[70px] flex justify-center align-middle items-center font-semibold text-center bg-[var(--brown)] text-white text-[20px] h-[40xp]"></i>
            <input 
              type="email" 
              name="email" 
              id="email"  
              placeholder="Your Email" 
              className="p-3 h-[70px] outline-none font-semibold rounded-none w-full text-black bg-white  transition-all"
            />
          </form>
          <h3>Get in Touch</h3>
          <p>Feel free to reach out to us for any inquiries,
             feedback, or support. We are here to assist you
              and ensure you have the best experience possible. 
              Contact us anytime, and we &#39; ll get back to you promptly.</p>
          <ul className="flex gap-2 justify-center flex-col">
            <li className="flex gap-2"><i className="ri-map-pin-line text-[var(--brown)]"></i><span>Rue De chiha Flech City Beni-hassen Monastir 5014</span></li>
            <li className="flex gap-2"><i className="ri-phone-line text-[var(--brown)]"></i><span> +216 55 115 856</span></li>
            <li className="flex gap-2"><i className="ri-message-line text-[var(--brown)]"></i><span>MedAmine@gmail.com</span></li>
          </ul>
          
  
        </div>
      </footer>
      
      <div className="flex justify-center tbn bg-black text-white w-full">
        <p>© 2025 M-Studio. All rights reserved.</p>
      </div>    
    </>
  )
}

export default Footer;