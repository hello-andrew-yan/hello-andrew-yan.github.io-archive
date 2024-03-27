import { useState, useEffect } from 'react';
import './App.css'

import Title from '../title/Title';
import Navigation from '../navigation/Navigation';

export default function App() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY >= 500) {
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
        <div className={isActive ? 'app scroll' : 'app'} >
            <Navigation/>
            <Title />
            {/* Temporary lmao */}
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}