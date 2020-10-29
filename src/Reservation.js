import React from 'react';

class Reservation extends React.Component {
    constructor() {
        super();
        this.state={
            isGoing: true,
            numberOfGuests: 2,

        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(e) {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        const name = e.target.name;

        this.setState({
            [name]: value
        })



        console.log(this.state);
    }




    render() {
        return(
            <form>

                <label>
                    Триває:
                    <input 
                        name="isGoing"
                        type='checkbox'
                        checked={this.state.isGoing}
                        onChange={this.handleChange}
                    />
                </label>

                <br/>

                <label>
                    Кількість гостей:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleChange}
                    />

                </label>

            </form>
        )
    }
}
export default Reservation;