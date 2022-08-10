import React, { useContext, useState } from 'react';
import './EditModal.css';
import Option from '../Option/Option';
import { AppContext } from '../../AppContext';
import axios from 'axios';

const EditModal = ({name, description, cuisine, image, id}) => {

    //States for Edit Request
    const [editName, setEditName] = useState()
    const [editDescription, setEditDescription] = useState()
    const [editCuisine, setEditCuisine] = useState()
    const [editImage, setEditImage] = useState()

    //Import context
    const {
        setEditModal, editModalClass, setEditModalClass} = useContext(AppContext)

    function editSubmitHandler(){
        axios.put(`https://agree-to-disagree.herokuapp.com/foods/${id}`,{
            "name":editName,
            "description": editDescription,
            "cuisine": editCuisine,
            "image": editImage
        })
            .then(
                console.log("Item updated!")
            )
            .catch(console.error)
        setEditModalClass('EditModal-container EMChidden')
        setTimeout(() => {
            setEditModal()
        }, 500);
    }
    
    function editDeleteHandler(){
        axios.delete(`https://agree-to-disagree.herokuapp.com/foods/${id}`)
        .then()
        .catch(console.error)
        setEditModalClass('EditModal-container EMChidden')
        setTimeout(() => {
            setEditModal()
        }, 500);
    }
    
    return (
        <div className='EditModal-main'>
            <div className={editModalClass}>
                <div className='EditModal-top'>
                    <h2>Edit</h2>
                    <span onClick={()=>{
                        setEditModalClass('EditModal-container EMChidden')
                        setTimeout(() => {
                            setEditModal()
                        }, 500);
                    }}><h2>x</h2></span>
                </div>
                <div className='EditModal-option-container'>
                    <Option 
                        name={name}
                        description={description}
                        cuisine={cuisine}
                        image={image}
                        />
                </div>
                <form className='EditModal-form'>
                    <div className='Add-food-text-row'>
                        <h3>Name</h3>
                        <input id="search" className='food-input' type="text" placeholder={name} 
                        onChange={(e)=>{
                            setEditName(e.target.value)
                        }}></input>
                    </div>
                    <div className='Add-food-text-row'>
                        <h3>Cuisine</h3>
                        <input id="cuisine" 
                        className='food-input' type="text" 
                        placeholder={cuisine} 
                        onChange={(e)=>{
                            setEditCuisine(e.target.value)
                        }}></input>
                    </div>
                    <div className='Add-food-text-row'>
                        <h3>Description</h3>
                        <input id="description" 
                        className='food-input' 
                        type="text" 
                        placeholder={description} 
                        onChange={(e)=>{
                            setEditDescription(e.target.value)
                        }}></input>
                    </div>
                    <div className='Add-food-text-row'>
                        <h3>Image URL</h3>
                        <input id="imageUrl" 
                        className='food-input' 
                        type="text" 
                        placeholder={image} 
                        onChange={(e)=>{
                            setEditImage(e.target.value)
                        }}></input>
                    </div>
                    <div className='Edit-buttons'>
                        <div className='orange-circle-small submit-button' onClick={()=>{
                            editSubmitHandler();
                        }}>
                            Update Change
                        </div>
                        <div className='orange-circle-small submit-button' onClick={()=>{
                            editDeleteHandler();
                        }}>
                            Delete
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;