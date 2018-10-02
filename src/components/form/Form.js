import React from 'react';
import './form.css';
import '../breed-image/breed-image.css';

const Form = props => {

    const handleChange = (event) => {
        props.onSelect(event.target.value);
      }

    return(
        <form>
        <select onChange={handleChange}>
            {props.breedsList ? props.breedsList.map((breed, index) => {
                return(
                    <option value={breed} key={index}>{breed}</option>
                );
            }) : null}
        </select>
        </form>
    );
}

export default Form;