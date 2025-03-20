import React from 'react'

function Header() {
    return (
        <header className="header mt-[30px] mx-[20px] p-0">

            <nav className='navbar container rounded-2xl bg-[#1C1C21] flex flex-row justify-between p-4 m-auto'>
                <a href="/">logo</a>

                <button className="menu-toggle sm:hidden">
                    <i className="fa-solid fa-bars text-2xl"></i>
                </button>

                <ul className="toggles font-[Roboto] font-medium uppercase hidden sm:flex flex-row justify-between gap-4">
                    <li className='bg-[#0F0F0F] p-3 rounded-[10px] hover:bg-[#00b7ff] hover:text-black'>
                        <a href="#about">Home</a>
                    </li>

                    <li className='bg-[#0F0F0F] p-3 rounded-[10px] hover:bg-[#00b7ff] hover:text-black'>
                        <a href="#services">Services</a>
                    </li>

                    <li className='bg-[#0F0F0F] p-3 rounded-[10px] hover:bg-[#00b7ff] hover:text-black'>
                        <a href="#projects">Projects</a>
                    </li>

                    <li className='bg-[#0F0F0F] p-3 rounded-[10px] hover:bg-[#00b7ff] hover:text-black'>
                        <a href="#contacts">Contact Us</a>
                    </li>
                </ul>
            </nav>

        </header >
    );
}

export default Header;