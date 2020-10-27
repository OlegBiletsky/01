import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Comment from './Comment';
import Clock from './Clock';
import Toggle from './Toggle';



const user = {
     firstName: "Oleh",
     lastName: "Biletskyi",
}

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGretting(user) {
    if (user) {
        return (
        <h1>{formatName(user)}</h1>
        )
    }
    return (
        <h1>Stranger</h1>
    )
}

const element = <h1>Hello, {formatName(user)}</h1>;
const element2 = <h1>Hello, {getGretting(false)}</h1>;


let dataArray = {
    author: {
        name: "King Kun",
        avatarUrl: "https://loremflickr.com/320/240/dog"
    },
    text: "lorem20loremlorem20loremlorem20lorem",
    data: new Date().toLocaleString(),
}

function ActionClick() {
    function handleclick(e) {
        e.preventDefault();
        console.log('HEi');
    }

    return (
        <a 
        href="#"
        onClick={handleclick}
        >
            Click me
        </a>
    )
}
const element3 = <div>{ActionClick()}</div>

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {element}
    {element2}
    <Comment 
        author={dataArray.author} 
        text = {dataArray.text} 
        date={dataArray.data}
    />
    <Clock/>
    {element3}
    <Toggle/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
