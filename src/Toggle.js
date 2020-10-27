import React from 'react'

class Toggle extends React.Component {
    constructor() {
        super();
        this.state = {
            isToogleOn: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            isToogleOn: !this.state.isToogleOn,//?
        })
    }


    render() {
        console.log(this.state.isToogleOn);
        
        return (
            <button onClick={this.handleClick}>
                 {(this.state.isToogleOn) ? 
                "Вимкнути" : "Увімкнути"}
            </button>
        )
    }
}
export default Toggle;