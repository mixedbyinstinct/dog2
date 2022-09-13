import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import heading from './Syne-ExtraBold.ttf';
import buttons from './Syne-Bold.ttf';
import text from './Barlow-Regular.otf';
import axios from 'axios';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'heading';
    src: url(${heading}) format('truetype');
    font-weight: bold;
  }
  @font-face {
    font-family: 'buttons';
    src: url(${buttons}) format('truetype');
    font-weight: bold;
  }
  @font-face {
    font-family: 'text';
    src: url(${text}) format('opentype');
    font-weight: bold;
  }
  body {
    background-color: #191716;
    color: #fcfcfb;
    & p {
      font-size: 18px;
      font-family: 'text';
    }
  }
`;

const Jumbotron = styled.header`
background-color: #191716;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top: 0;
left: 0;
width: 100vw;
height: 10vh;
z-index: 1;
& h1 {
  color: #fcfcfb;
  font-size: 32px;
  font-family: 'heading';
}
`;

const Button = styled.button`
height: 40px;
font-size: 18px;
font-family: 'buttons';
background-color: #beb7a4;
color: #020202;
border: none;
border-radius: 3px;
padding: 8px;
display: flex;
justify-content: center;
align-items: center;
`;

const Container = styled.div`
background-color: #E6af2e;
display: flex;
flex-flow: column nowrap;
padding: 10px;
flex-grow: 1;
justify-content: center;
align-items: center;
height: 90vh;
position: absolute;
top: 9vh;
width: 100vw;
positon: absolute;
& p {
  color: #020202;
}
left: 0;
filter: drop-shadow(0 2px 5px #ffffff);
border-top-right-radius: 15px;
border-top-left-radius: 15px;
z-index: 2;
`;

const ImageBox = styled.div`
border: none;
border-radius: 4px;
display: flex;
flex-flow: column nowrap;
flex-shrink: 1;
padding: 8px;
margin-top: 5vh;
justify-content: center;
align-items: center;
background-color: transparent;
height: 200px;
width: 198px;
position: relative;
& img {
  width: 80%;
  height: 80%;
}
${Button} {
  background-color: #3d348b;
  color: #fcfcfb;
  height: 30px;
  font-size: 14px;
  position: absolute;
  top: 85%;
  
}
`;

const App = () => {
  const [url, setUrl] = useState('');
  const [showPics, setShowPics] = useState(false);
  function togglePics() {
    setShowPics(!showPics);
  }
  function dogPics() {
    axios.get("https://random.dog/woof.json").then(({data}) => {
    if(!showPics) {
      togglePics();
    }
    setUrl(data.url);
    })
  }
  return (
    <>
    <GlobalStyles />
    <Jumbotron>
    <h1>Dog Pics R Us</h1>
    </Jumbotron>
    <Container>
    <p>Enjoy some random pics of dogs</p>
    <Button onCclick={dogPics}>Show me SOME DOGSS</Button>
    <ImageBox>
     {showPics ? 
     <img src={url} alt='mistake' /> : <div />}
    <Button onClick={dogPics}>show me MOAR! DOGS!!</Button>
    </ImageBox>
    </Container>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));