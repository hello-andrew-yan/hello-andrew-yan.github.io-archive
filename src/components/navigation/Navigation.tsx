import { useState, useEffect } from 'react';
import './Navigation.css'
import '../../index.css'

export default function Navigation() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY >= 400) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <nav className={isActive ? 'navigation-bar scroll' : 'navigation-bar'} >
            <a href="" className="logo">A</a>
            <ul className="navigation-menu">
                <li className="navigation-element about">
                    <a href="#about">ABOUT</a>
                </li>
                <li className="navigation-element projects">
                    <a href="">PROJECTS</a>
                </li>
                <li className="navigation-element resume">
                    <a href="">RESUME</a>
                </li>
                <li className="navigation-element contact">
                    <a href="">CONTACT</a>
                </li>
                <hr />
            </ul>
        </nav>
    )
}