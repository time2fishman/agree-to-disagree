import React from 'react';
import './Option.css'

const Option = ({name, image, description}) => {
    return (
        <div className='Option-container'>
            <div className='Option-name-container'>
                <span className='Option-name'>{name}</span>
            </div>
            <img className='Option-image' src={image} alt={description}/>
        </div>
    );
};

export default Option;