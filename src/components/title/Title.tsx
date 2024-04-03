import './Title.css'
import { useEffect } from 'react';

export default function Title() {
    useEffect(() => {
        let listItems = document.querySelectorAll('.title span');
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("bounce");
            }, (index + 1) * 500);
        });

        listItems = document.querySelectorAll('.subtitle span');
        listItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add("bold");
            }, (index + 1) * 500);
        });
    }, []);
    return (
        <div className="title-main" id="about">
            <div className="title-container">
                <h1 className="title">
                    <span>ANDREW</span>
                    <span>YAN</span>
                </h1>
                <h2 className="subtitle">
                    <span>Hello</span>
                    , I am a Software Engineer and Front-End Developer living in
                    <span> Sydney</span>,
                    <span> Australia</span>.
                    Currently studying at <span>UNSW</span>.
                </h2>
            </div>
        </div>
    )
}