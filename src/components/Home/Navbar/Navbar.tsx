"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navlinks } from '../../../../Constants/Navlinks';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div className={`fixed ${navBg ? "bg-[#240b39]" : ""} h-[9vh] z-[10] w-full transition-all duration-300`}>
      <div className="flex items-center h-full justify-between w-[90%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/logoop.webp"
          alt="Logo"
          width={45}
          height={20}
          className="ml-[-0.8rem] sm:ml-2 rounded-3xl"
        />

        {/* Navigation Links */}
        <div className="flex items-center space-x-10">
          <div className='hidden lg:flex items-center space-x-8'>
            {navlinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="nav_link">
                  {navlink.Lable}
                </p>
              </Link>
            ))}
          </div>
          <div>
            <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-white lg:hidden' onClick={openNav} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
