import React from "react";
import styled from 'styled-components';
import Typical from 'react-typical';

const Title = styled.h1`
  color: #074d88;
  font-size: 75px;
  font-weight: 500;
  text-align: left;
  margin: 1em;
`;

const SubTitle = styled.h2`
  color: #074d88;
  font-size: 25px;
  font-weight: 500;
  text-align: left;
  margin: 3em;
`;

class Intro extends React.Component {

    render(){
        return (
            <div >
            <Title>Hello! My name is Gurmit.</Title>
            <SubTitle>I'm a{' '} 
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
            </SubTitle>
            </div>

        )
    }
}

export default Intro;