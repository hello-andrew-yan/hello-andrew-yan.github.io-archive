import './Navigation.css'
import '../../index.css'

export default function Navigation() {
    return (
        <nav className="navigation-bar">
            <a href="" className="logo">:D</a>
            <ul className="navigation-menu">
                <li className="navigation-element about">
                    <a href="">ABOUT</a>
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
            </ul>
        </nav>
    )
}