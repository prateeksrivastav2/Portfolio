import React from 'react';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg'; // Importing the Close icon from react-icons
import { navlinks } from '../../../../Constants/Navlinks';


type Props = {
  showNav:boolean;
  closeNav:()=>void;
};

const MobileNavbar = ({closeNav,showNav}:Props) => {
  const navOpen=showNav?'translate-x-0':'translate-x-[-100%]'
  return (
    <div>
      {/* Overlay Background */}
      <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
      
      {/* Mobile Navbar */}
      <div className={`text-white ${navOpen} transition transform-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[10000] p-6`}>
        {navlinks.map((navlink) => (
          <Link key={navlink.id} href={navlink.url}>
            <p className="nav_link text-[20px] ml-12 pb-2 border-white sm:text-[30px]">
              {navlink.Lable} {/* Assuming 'label' is the correct property */}
            </p>
          </Link>
        ))}
         <div className="absolute top-12 right-2 sm:w-13 sm:h-12 w-12 h-12 z-[10001] text-white cursor-pointer ">
        <CgClose  onClick={closeNav}/>
      </div>
      </div>
      
      {/* Close Icon with higher z-index and fixed position */}
     
    </div>
  );
};

export default MobileNavbar;
