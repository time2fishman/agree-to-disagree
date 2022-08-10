import React, { useContext, useState } from 'react';
import './DescriptionModal.css';
import Option from '../Option/Option';
import { AppContext } from '../../AppContext';
import axios from 'axios';

const DescriptionModal = ({name, description, image, id}) => {
    
// Import Context
const {
    setDescriptionModal, descriptionModalClass, setDescriptionModalClass} = useContext(AppContext)

    return (
        <div className='DescriptionModal-main'>
            <div className={descriptionModalClass}>
                <h2>Description</h2>
                <span onClick ={() => {
                    setDescriptionModalClass
                    ('DescriptionModal-container DMChidden')
                    setTimeout(() => {
                        setDescriptionModal()
                    }, 500)
                }}><h2>Hi</h2></span>
            </div>
            <div className='DescriptionModal-option-container'>
                
                    {name}
                    {description}
                    
        
            </div>
        </div>
    )
}

export default DescriptionModal;