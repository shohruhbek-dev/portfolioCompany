import React, { useState } from 'react';
import logo from '../../assets/logocom.avif';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './languageselector';

function Navbar() {
    const { t, i18n } = useTranslation();
    const ChangeLng = (selectedLanguage) => {
      i18n.changeLanguage(selectedLanguage);
      localStorage.setItem("i18nextLng", selectedLanguage);
    };

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: t('Kompaniya haqida'), href: 'about' },
        { title: t('Xizmatlar'), href: 'service' },
        { title: t('Loyihalar'), href: 'works' },
        { title: t('Aloqa'), href: 'contact' }
    ];

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

                    <div className='flex items-center justify-between gap-4'>
                        <ul className='nav-desktop gap-4 text-[16px] uppercase'>
                        {navLinks.map((item, idx) => (
                            <li
                                key={idx}
                                className='bg-[#0F0F0F] px-4 py-3 rounded-[12px] hover:bg-[#FF6600] cursor-pointer transition-colors duration-300'
                                onClick={() => {
                                    const target = document.getElementById(item.href);
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                        if (isOpen) toggleMenu();
                                    }
                                }}
                            >
                                <a className="cursor-pointer">{item.title}</a>
                            </li>
                        ))}
                    </ul>

                        <div className="flex items-center gap-1">
                            <div className="language-selector">
                                <LanguageSelector />
                            </div>
                            <div className='hamburger-icon'>
                                <button onClick={toggleMenu}>
                                    <Bars3Icon className='h-8 w-8 text-white' />
                                </button>
                            </div>
                        </div></div>
                </div>

                <div className={`nav-mobile fixed top-0 left-0 h-[100vh] w-[90%] min-[550px]:w-[70%] bg-[#1A1A1A] uppercase text-white p-6 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='flex justify-between items-center mb-6'>
                        <img src={logo} alt="logo" className='w-32' />
                        <XMarkIcon className='h-8 w-8 cursor-pointer' onClick={toggleMenu} />
                    </div>
                    <ul className='flex flex-col gap-4'>
                        {navLinks.map((item, idx) => (
                            <li
                                key={idx}
                                className='bg-[#0F0F0F] max-w-[300px] px-4 py-3 rounded-[12px] hover:bg-[#FF6600] cursor-pointer transition-colors duration-300'
                                onClick={() => {
                                    const target = document.getElementById(item.href);
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                        toggleMenu();
                                    }
                                }}
                            >
                                <a className="cursor-pointer">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {isOpen && (
                    <div
                        className="fixed top-0 left-[100%] w-full h-[100vh] bg-gray-600 min-[950px]:hidden opacity-60 z-40 transition-all duration-500 ease-in-out"
                        style={{
                            transform: isOpen ? 'translateX(-100%)' : 'translateX(0)',
                            visibility: isOpen ? 'visible' : 'hidden',
                        }}
                        onClick={toggleMenu}
                    />
                )}

                <a href="tel:+998950907050" target='_blank' className='phone fixed right-4 bottom-4 bg-[#FF6600] w-10 h-10 z-[99] sm:w-12 sm:h-12 sm:right-6 sm:bottom-6 lg:w-14 lg:h-14 lg:right-8 xl:right-10 flex items-center justify-center rounded-full pulse-border'>
                    <i className="fa-solid fa-phone text-xl sm:text-2xl lg:text-3xl"></i>
                </a>

                <a href="tel:+998950907050" target='_blank' className='phone fixed left-4 bottom-4 bg-black w-10 h-10 z-[99] sm:w-12 sm:h-12 sm:left-6 sm:bottom-6 lg:w-14 lg:h-14 lg:left-8 2xl:left-10 flex items-center justify-center rounded-full pulse-border'>
                    <i className="fa-brands fa-telegram text-[42px] sm:text-[50px] lg:text-[59px] text-[#FF6600]"></i>
                </a>
            </div>
        </>
    );
}

export default Navbar;
