import React from 'react';
import './form.css';

const Form = props => {
    return(
        <form>
        <select>
            {props.breedsList ? props.breedsList.map((breed) => {
                return(
                    <option value={breed}>{breed}</option>
                );
            }) : null}
        </select>
            <button>Go</button>
        </form>
    );
}

export default Form;