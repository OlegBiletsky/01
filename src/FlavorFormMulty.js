import React from 'react'

class FlavorFormMulty extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ["теніс", "волейбол"]
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
                    Оберіть ваш улюблений вид спорту:
                    <select multiple={true} value={this.state.value} onChange={this.handleChange}>
                        <option value="футбол">Футбол</option>
                        <option value="волейбол">Волейбол</option>
                        <option value="теніс">Теніс</option>
                        <option value="бокс">Бокс</option>
                    </select>
                </label>

                <input type="submit" value="надіслати (в консоль)"/>

            </form>
        );
    }
}
export default FlavorFormMulty;