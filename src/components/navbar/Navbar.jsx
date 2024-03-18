import { useState } from "react";
import Link from "../link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
   
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/404', name: 'Not Found' }
      ];
      
      
    return (
        <nav className=" bg-yellow-200 text-black p-6">
            <div className="lg:hidden text-3xl " onClick={()=>setOpen(!open)}>
                {
                    open === true ? <RiMenu2Fill></RiMenu2Fill> : <IoMdClose></IoMdClose>
                }
               
            </div>
            <ul className={`lg:flex duration-1000 absolute lg:static
             
             ${open ? '-top-44' : 'top-40'}
              
            bg-yellow-200 px-6 shadow-lg`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default Navbar;