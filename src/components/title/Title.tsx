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
                <svg
                    className="stroke"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 83.1 17"
                    xmlSpace="preserve"
                >
                    <path className="path" fill={'#a32f35'} d="M0,15.2c-0.3-8.2,16.1-4.1,21-3.7c7.8,1.1,15.5,2,23.4,2.1c7.1,0.2,36.5-0.7,38.2-8.7C82.6,3,81.1,1.3,79.8,0c1.5,1.3,3.1,2.8,3.2,4.9c-0.8,9.2-31.3,9.8-38.7,9.7c-7.9-0.1-15.7-1.1-23.5-2.1c-3.9-0.5-7.8-1.1-11.6-1.3C5.8,10.8,0.1,10.5,0,15.2L0,15.2z"/>
                </svg>

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