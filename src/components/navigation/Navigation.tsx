import './Navigation.css'
import '../../index.css'
import { useEffect } from 'react';

export default function Navigation() {
    useEffect(() => {
        const listItems = document.querySelectorAll('li.navigation-element');
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("animate-fade");
            }, (index + 1) * 200);
        });
    }, []);
    return (
        <nav className="navigation-bar">
            <ul className="navigation-menu">
                <li className="navigation-element projects">
                    <a href="https://github.com/hello-andrew-yan">PROJECTS</a>
                </li>
                <li className="navigation-element resume">
                    <a href="">RESUME</a>
                </li>
                <li className="navigation-element contact">
                    <a href="mailto:hello.andrew.yan@outlook.com">CONTACT<span className="badge">3</span></a>
                </li>
            </ul>
        </nav>
    )
}