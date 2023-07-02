import React, { useEffect, useRef, useState } from 'react';
import firebase from "./firebase"; // Import the firebase instance from your firebase.js file
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleSignOut = async () => {
        try {
            await firebase.auth().signOut();
            navigate("/");
        } catch (error) {
            console.log("Error signing out: ", error);
        }
    };

    const handleJobSearch = () => {
        navigate("/jobsearch");
    };

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const closeMenuOnResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", closeMenuOnResize);

        return () => {
            window.removeEventListener("resize", closeMenuOnResize);
        };
    }, []);

    return (
        <nav className="w-full h-16 bg-black flex justify-between p-4">
            <div className="p-4">
                <a className="text-2xl text-white font-semibold font-mono cursor-pointer" href="#">Job Portal</a>
            </div>

            <div className="flex items-center space-x-10">
                <input type="checkbox" id="menu-toggle" className="hidden" checked={isMenuOpen} onChange={handleMenuToggle} />
                <label htmlFor="menu-toggle" className="block cursor-pointer md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                        <path d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                </label>

                <ul className={`md:hidden ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
                    <li>
                        <a href="#" className="mr-4 text-lg font-mono text-blue-600 hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#" className="mr-4 text-lg font-mono text-white hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            About us
                        </a>
                    </li>

                    <li>
                        <a href="#" className="mr-4 text-lg text-white hover:text-blue-600 font-mono transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            Contact us
                        </a>
                    </li>

                    <li>
                        <button className="rounded font-mono bg-zinc-800 text-white px-4 py-2 hover:bg-blue-600 transition ease-in-out delay-150 duration-300" onClick={handleJobSearch}>
                            Search Job
                        </button>
                    </li>

                    <li>
                        <button className="rounded font-mono bg-zinc-800 hover:bg-blue-600 text-white px-4 py-2 transition ease-in-out delay-150 duration-300" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </li>
                </ul>

                <ul className="hidden md:flex justify-between space-x-2 md:space-x-0 md:space-y-2 md:w-auto md:ml-auto">
                    <li>
                        <a href="#" className="mr-[20px] text-lg font-mono text-blue-600 hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#" className="mr-[20px] text-lg font-mono text-white hover:text-blue-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            About us
                        </a>
                    </li>

                    <li>
                        <a href="#" className="mr-[20px] text-lg text-white hover:text-blue-600 font-mono transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            Contact us
                        </a>
                    </li>

                    <li>
                        <button className="mr-[20px] rounded font-mono bg-zinc-800 text-white px-4 py-2 hover:bg-blue-600 transition ease-in-out delay-150 duration-300" onClick={handleJobSearch}>
                            Search Job
                        </button>
                    </li>

                    <li>
                        <button className="rounded font-mono bg-zinc-800 hover:bg-blue-600 text-white px-4 py-2 transition ease-in-out delay-150 duration-300" onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
