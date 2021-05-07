import React from "react";
import Typical from 'react-typical';
import './Intro.css';

class Intro extends React.Component {

    render(){
        return (
            <div >
                <header className="Intro-header">
            <h1>Hello! My name is Gurmit.</h1>
            <p>I'm a{' '} 
                <Typical
                loop={5}
                wrapper="b"
                steps={[
                    'software engineer.',
                    2500,
                    'system designer.',
                    2500,
                    'problem solver.',
                    2500,
                    'devops practitioner.',
                    2500
                ]}
                />
            </p>
            </header>
            </div>

        )
    }
}

export default Intro;