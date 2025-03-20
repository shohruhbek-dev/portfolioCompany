import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuToggleRef = useRef(null);
    const navLinksRef = useRef(null);

    useEffect(() => {
        const menuToggle = menuToggleRef.current;

        const toggleMenu = () => {
            setIsOpen((prev) => !prev);
        };

        menuToggle.addEventListener("click", toggleMenu);

        return () => {
            menuToggle.removeEventListener("click", toggleMenu);
        };
    }, []);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className={clsx("header")}>
            <div className={clsx("headerinfo")}>
                <div className={clsx("headerinfo1")}>
                    <Link to="/">logo</Link>
                </div>
                <button ref={menuToggleRef} className={clsx("menu-toggle")}>
                    <i className="fa-solid fa-bars"></i>
                </button>

                <ul ref={navLinksRef} className={clsx("headerinfoUl", { ["open"]: isOpen })}>
                    
                    <li>
                        <Link to="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={closeMenu}>Services</Link>
                    </li>
                    <li>
                        <Link to="/projects" onClick={closeMenu}>Projects</Link>
                    </li> <li>
                        <Link to="/about" onClick={closeMenu}>About</Link>
                    </li> <li>
                        <Link to="/contacts" onClick={closeMenu}>Contact Us</Link>
                    </li>

                </ul>
            </div>

            
        </header>
    );
}

export default Navbar;