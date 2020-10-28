import React from 'react'

function ListItem(props) {
    return (
        <li>{props.value}</li>
    )
}

function NumberList (props) {
    const number = props.number;
    const listItem = number.map( (i) => 
        <ListItem key={i.toString()} value={i}/>
    );
    return (
        <ul>{listItem}</ul>
    )
}
export default NumberList;
