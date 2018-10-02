import React from 'react';
import './select.css';
import '../breed-image/breed-image.css';

const Select = props => {

    const handleChange = (event) => {
        props.onSelect(event.target.value);
      }

    return(
        <div className="select-container">
        <select onChange={handleChange}>
            {props.breedsList ? props.breedsList.map((breed, index) => {
                return(
                    <option value={breed} key={index}>{breed}</option>
                );
            }) : null}
        </select>
        </div>
    );
}

export default Select;