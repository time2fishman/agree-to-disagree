import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import EditModal from '../EditModal/EditModal';
import './Option.css'

const Option = ({ name, image, description, cuisine, id }) => {

    const { setEditModal, setEditModalClass } = useContext(AppContext)

    function callEditModal() {
        setTimeout(() => {
            setEditModalClass('EditModal-container')
        }, 1);
        setEditModal(
            <EditModal
                name={name}
                description={description}
                cuisine={cuisine}
                image={image}
                id={id}
            />
        )
    }

    return (
        <div className='Option-container' onClick={() => {
            callEditModal()
        }}>
            <div className='Option-name-container'>
                <span className='Option-name'>{name}</span>
            </div>
            <img className='Option-image' src={image} alt={description} />
        </div>
    );
};

export default Option;