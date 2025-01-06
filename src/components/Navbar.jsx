import React, { useRef } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const navItems = ['Nexus', 'Vault', 'Prologues', 'About', 'Contact'];

const Navbar = () => {
    const navContainerRef = useRef(null);
    return <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-20 h-16 border-none trasition-all duration-700 sm:inset-x-6">

        <header className="absolute top-1/2 w-full -translate-y-1/2">

        <nav className="flex size-full items-center justify-between p-4">

            <div className="flex items-center gap-7">
                <img src="/img/logo.png" alt="logo" className="w-10" />
                <Button
                    id="product-button"
                    title="Product"
                    rightIcon={<TiLocationArrow />}
                    containerClass="bg-blue-50 md:flex hidden items center justify-center gap-1"
                />
            </div> 

            <div className="flex h-full items-center">

                <div id="navLink" className="hidden md:block">
                    {navItems.map((item) => (
                        <a className="nav-hover-btn">
                            {item}
                        </a>
                    ))}

                </div>

            </div>
        </nav>

        </header>

    </div>;
}

export default Navbar;
