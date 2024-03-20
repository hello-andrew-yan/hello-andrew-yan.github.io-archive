import './Navigation.css'
import '../../index.css'

export default function Navigation() {
    return (
        <nav>
            <ul className="navigation-container">
                <li className="logo">
                    <a href="" className="bold pink">:D</a>
                </li>
                <li className="about">
                    <a href="">ABOUT</a>
                </li>
                <li className="projects">
                    <a href="">PROJECTS</a>
                </li>
                <li className="resume">
                    <a href="">RESUME</a>
                </li>
                <li className="contact">
                    <a href="">CONTACT</a>
                </li>
            </ul>
        </nav>
    )
}