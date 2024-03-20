import './Title.css'

export default function Title() {
    return (
        <div className="title-container">
            <h2>
                Hello, my name is <span className="bold pink">Andrew</span>.
                I am a Software Enginner and Front-End Developer living in
                <span className="bold"> Sydney</span>,
                <span className="bold"> Australia</span>.
            </h2>
        </div>
    )
}