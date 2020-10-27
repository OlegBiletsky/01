import React from 'react';

function UserGreeting(props) {
    return (
        <h1>З поверненням!</h1>
    )
}
function GuestGreeting(props) {
    return (
        <h1>Зареєструйтеся, будь ласка.</h1>
    )
}

function Greeting (props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (<UserGreeting/>)
    } else {
        return(<GuestGreeting/>)
    }
}
export default Greeting;