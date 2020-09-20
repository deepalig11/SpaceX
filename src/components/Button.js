import React from 'react';

function Button(props) {
    const btnclassname = (props.active == true) ? 'btn btn-success active' : 'btn btn-success'
    return (
        <button id={props.year} type="button" onClick={() => { props.clickHandler(props.year) }} className={btnclassname}>{props.children}</button>
    );
}

export default Button;