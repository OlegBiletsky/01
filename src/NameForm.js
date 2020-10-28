import React from 'react'

class NameForm extends React.Component {
    constructor(){
        super();
        this.state = {
            value: "Volodymyr",
            areaValue: " I love work with React because...",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAreaChange = this.handleAreaChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }
    handleAreaChange(e) {
        this.setState({
            areaValue: e.target.value,
        });
    }
    handleSubmit(e) {
        console.log(this.state.value, "form's value");
        console.log(this.state.areaValue, "area's value");
        
        e.preventDefault();
    }
    
    

    render() {
        return(
            <form onSubmit={this.handleSubmit}>

                <label>
                    Імя:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <textarea value={this.state.areaValue} onChange={this.handleAreaChange}/>
                </label>

                <input type="submit" value="Надіслати (в консоль)" />
                
            </form>
        )
    }
}
export default NameForm;