import React, { useState } from 'react';
import logo from '../../assets/logocom.avif';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: 'Bosh sahifa', href: 'home' },
        { title: 'Kompaniya haqida', href: 'about' },
        { title: 'Xizmatlar', href: 'service' },
        { title: 'Mijozlar', href: 'clients' },
        { title: 'Aloqa', href: 'contact' },
    ];

    const handleLinkClick = (href) => {
        const target = document.getElementById(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            toggleMenu();  // Close the menu when a link is clicked
        }
    };


    return (
        <>
            <style>
                {`
                    @media (min-width: 950px) {
                        .nav-desktop { display: flex; }
                        .nav-mobile, .hamburger-icon { display: none; }
                    }

                    @media (max-width: 949px) {
                        .nav-desktop { display: none; }
                        .nav-mobile, .hamburger-icon { display: block; }
                    }
                `}
            </style>

            <div className='relative'>
                <div className='navbar w-full bg-[#1A1A1A] text-white p-4 flex justify-between items-center rounded-2xl'>
                    <div>
                        <img src={logo} alt="logo" className='w-32 h-full' />
                    </div>

                    <ul className='nav-desktop gap-4 text-[16px]'>
                        {navLinks.map((link, idx) => (
                            <li
                                key={idx}
                                className='bg-[#0F0F0F] px-[20px] py-[16px] rounded-[12px] hover:bg-[#FF6600] cursor-pointer transition-colors duration-300'
                                onClick={() => handleLinkClick(link.href)}
                            >
                                <a className="cursor-pointer">{link.title}</a>
                            </li>
                        ))}
                    </ul>

                    <div className='hamburger-icon'>
                        <button onClick={toggleMenu}>
                            <Bars3Icon className='h-8 w-8 text-white' />
                        </button>
                    </div>
                </div>

                <div
                    className={`nav-mobile fixed top-0 left-0 h-[100vh] w-full md:w-[70%] bg-[#1A1A1A] text-white p-6 z-50 transition-transform duration-300 ease-in-out 
                        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className='flex justify-between items-center mb-6'>
                        <img src={logo} alt="logo" className='w-32' />
                        <XMarkIcon className='h-8 w-8 cursor-pointer md:hidden' onClick={toggleMenu} />
                    </div>
                    <ul className='flex flex-col gap-4'>
                        {navLinks.map((link, idx) => (
                            <li
                                key={idx}
                                className='bg-[#0F0F0F] px-[20px] py-[16px] rounded-[12px] hover:bg-[#FF6600] cursor-pointer transition-colors duration-300'
                                onClick={() => handleLinkClick(link.href)}
                            >
                                <a className="cursor-pointer">{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {isOpen && (
                      <div
                      className="fixed top-0 left-0 md:left-[70%] w-full md:w-[30%] h-[100vh] bg-gray-600 opacity-60 z-40 transition-all duration-500 ease-in-out"
                      style={{
                          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                          visibility: isOpen ? 'visible' : 'hidden',
                      }}
                      onClick={toggleMenu}
                  />
                )}
            </div>
        </>
    );
}

export default Navbar;
