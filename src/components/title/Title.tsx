import './Title.css'

export default function Title() {
    return (
        <div className="title-container">
            <h2>
                Hello, my name is <a className="bold pink" href="https://www.linkedin.com/in/hello-andrew-yan">Andrew</a>.
                I am a Software Enginner and Front-End Developer living in
                <span className="bold"> Sydney</span>,
                <span className="bold"> Australia</span>.
            </h2>
        </div>
    )
}