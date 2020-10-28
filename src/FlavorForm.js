import React from 'react'

class FlavorForm extends React.Component {
    constructor() {
        super()
        this.state = {
            value:"кокос",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({
            value: e.target.value,
        })
    }

    handleSubmit(e) {
        console.log(this.state.value);
        e.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>

                <label>
                    Оберіть ваш улюблений аромат:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="грейпфрут">Грейпфрут</option>
                        <option value="лайм">Лайм</option>
                        <option value="кокос">Кокос</option>
                        <option value="манго">Манго</option>
                    </select>
                </label>

                <input type="submit" value="надіслати (в консоль)"/>

            </form>
        );
    }
}
export default FlavorForm;