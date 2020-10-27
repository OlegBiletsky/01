import React from 'react';
import Greeting from './Greeting';

function LoginButton (props) {
    return (
        <button onClick={props.onClick}>
            Log in site
        </button>
    );
}
function LogoutButton (props) {
    return (
        <button onClick={props.onClick}>
            Log out from site
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoggedIn: false,
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick () {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick () {
        this.setState({isLoggedIn: false})
    }





    render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick}/>
    } else {
        button = <LoginButton onClick={this.handleLoginClick}/>
    }

        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
            
        );
    }
}
export default LoginControl;