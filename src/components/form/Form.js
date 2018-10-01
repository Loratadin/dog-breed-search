import React from 'react';
import './form.css';

const Form = props => {
    return(
        <form>
        <select>
            {props.breedsList ? props.breedsList.map((breed, index) => {
                return(
                    <option value={breed} key={index}>{breed}</option>
                );
            }) : null}
        </select>
            <button>Go</button>
        </form>
    );
}

export default Form;