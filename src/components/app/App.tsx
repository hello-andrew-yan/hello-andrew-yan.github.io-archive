import './App.css'

import Title from '../title/Title';
import Navigation from '../navigation/Navigation';

export default function App() {
    return (
        <div className="app" >
            <Navigation/>
            <Title />
        </div>
    )
}