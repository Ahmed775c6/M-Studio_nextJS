'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const UserSideBar = () => {
  const pathname = usePathname();
  
  // Extract user ID from current path
  const pathSegments = pathname.split('/');
  const userId = pathSegments[pathSegments.length - 1]; // Last segment is user ID
  
  // Navigation items configuration
  const navItems = [
    { id: 'info', icon: 'ri-user-line', label: 'Profile & Settings', basePath: 'info' },
    { id: 'Bookings', icon: 'ri-calendar-event-line', label: 'Bookings', basePath: 'Bookings' },
    { id: 'Gallery', icon: 'ri-gallery-line', label: 'My Gallery', basePath: 'Gallery' },
    { id: 'Reports', icon: 'ri-feedback-line', label: 'Reports', basePath: 'Repports' },
  ];

  // Determine active section based on route structure
  const getActiveSection = () => {
    // Path structure: /Profile/[section]/[id]
    return pathSegments.length >= 3 ? pathSegments[pathSegments.length - 2] : '';
  };

  const activeSection = getActiveSection();

  return (
    <>
      <div className="w-[25%] bg-black text-white flex flex-col gap-2">
        <h4 className="p-4 text-gray-400 font-semibold">Main</h4>
      
        <ul className="w-full flex flex-col">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`/Profile/${item.basePath}/${userId}`}
                className={`w-full p-4 flex gap-4 cursor-pointer justify-start text-[1em] f ${
                  activeSection === item.basePath 
                    ? 'active' 
                    : ''
                }`}
                id={`link-${item.id}`}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
          
          <form action="/api/logout?_method=DELETE" method="POST">
            <button
              className="w-full p-4 flex gap-4 cursor-pointer text-[1em] f hover:bg-gray-800 text-left"
              type="submit"
            >
              <i className="ri-shut-down-line"></i>
              <span>Logout</span>
            </button>
          </form>
        </ul>
      </div>
    </>
  )
}

export default UserSideBar;