import './Title.css'
import { useEffect } from 'react';

export default function Title() {
    useEffect(() => {
        let listItems = document.querySelectorAll('.title span');
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("bounce");
            }, (index + 1) * 70);
        });

        listItems = document.querySelectorAll('.subtitle span');
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("bold");
            }, (index + 1) * 400);
        });
    }, []);
    return (
        <div className="title-main">
            <div className="title-container">
                <h1 className="title">
                    <div>
                        <span>A</span>
                        <span>N</span>
                        <span>D</span>
                        <span>R</span>
                        <span>E</span>
                        <span>W</span>
                    </div>
                    <div>
                        <span>Y</span>
                        <span>A</span>
                        <span>N</span>
                    </div>
                </h1>
                <h2 className="subtitle">
                    <span>Hello</span>, I am an aspiring
                    <span> Software Engineer</span> and 
                    <span> Front-End Developer</span> living in
                    <span> Sydney</span>,
                    <span> Australia</span>.
                    Currently studying at <span>UNSW</span>.
                </h2>
            </div>
        </div>
    )
}