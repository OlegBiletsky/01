import React from 'react'

class FlavorFormMulty extends React.Component {
    constructor() {
        super()
        this.state = {
            // value: ["теніс", "волейбол"]
            value: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        console.log(e.target.value, typeof e.target.value);
        
        // this.setState( (state) =>({value: [e.target.value, e.target.value,]}) )
        // this.setState( (state) =>({ value: [...state.value, option] }))
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
                    <select multiple={true}  onChange={this.handleChange}>
                        {/* value={this.state.value} */}
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