import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import Option from '../Option/Option';
import './MainPage.css'

const MainPage = () => {

    const {
        setNavBarVisible,
        mainPageVisible, setMainPageVisible,
        setPlayArray,
        editModal
    }
        = useContext(AppContext)

    useEffect(() => {
        setNavBarVisible('NavBar-container')
        setMainPageVisible('MainPage-main hidden')
        setTimeout(() => {
            setMainPageVisible('MainPage-main')
        }, 100);
    }, [])

    const [axiosResults, setAxiosResults] = useState([])
    const [search, setSearch] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [searchArray, setSearchArray] = useState([])
    const [addInputs, setAddInputs] = useState('Add-inputs displayNone')
    const [addArrow, setAddArrow] = useState('down-triangle-closed')

    useEffect(() => {
        axios.get('https://agree-to-disagree-backend.vercel.app')
            .then(response => {
                setAxiosResults(response.data)
                console.log("fetch")
            })
            .catch(console.error)
    }, [editModal])

    useEffect(() => {
        if (search === '') {
            setSearchArray(axiosResults)
        } else {
            const runSearch = axiosResults.filter((item) => {
                return item.name.substring(0, search.length).toLowerCase() === search.toLowerCase()
            })
            setSearchArray(runSearch)
        }
    }, [axiosResults, search])

    function DisplayOptions() {
        return searchArray.map((item, index) => {
            return (
                <div key={index}>
                    <Option
                        name={item.name}
                        image={item.image}
                        cuisine={item.cuisine}
                        description={item.description}
                        id={item._id} />
                </div>
            )
        })
    }

    const navigate = useNavigate()

    function createPlayArray(count) {
        const shuffled = [...searchArray].sort(() => 0.5 - Math.random());
        const shortened = shuffled.splice(0, count)
        setPlayArray(shortened)
        setMainPageVisible('MainPage-main hidden')
        setTimeout(() => {
            navigate('/play', { replace: true })
        }, 1000);
    }

    function addToDatabase() {
        if (search.length < 1 || cuisine.length < 1 || description.length < 1 || imageUrl < 1) {
            alert('Please fill out all boxes to proceed!')
        } else {
            axios.post('https://agree-to-disagree-backend.vercel.app', {
                name: search,
                image: imageUrl,
                cuisine: cuisine,
                description: description
            })
                .then()
                .catch(console.error)
            alert(`Added ${search} to databse!`)
            setSearch('')
            setCuisine('')
            setDescription('')
            setImageUrl('')
        }
    }

    function addMenuClicked() {
        if (addArrow === 'down-triangle-closed') {
            setAddInputs('Add-inputs')
            setTimeout(() => {
                setAddInputs('Add-inputs open')
            }, 1);
            setAddArrow('down-triangle-open')
        } else {
            setAddArrow('down-triangle-closed')
            setAddInputs('Add-inputs')
            setTimeout(() => {
                setAddInputs('Add-inputs displayNone')
            }, 750);
        }
    }

    return (
        <div className={mainPageVisible}>
            <div className='MainPage-container'>
                <div className='Play-container'>
                    <h3>Play</h3>
                    <h4>Are you and your partner having a tough time deciding what to eat? Let us help you! To get started, select how many options you'd like to choose from below.</h4>
                    <div className='orange-circle-container'>
                        <div to="/play"
                            className='orange-circle-small'
                            onClick={() => {
                                createPlayArray(5)
                            }}>5</div>
                        <div className='orange-circle-small'
                            onClick={() => {
                                createPlayArray(15)
                            }}>15</div>
                        <div className='orange-circle-small'
                            onClick={() => {
                                createPlayArray(25)
                            }}>25</div>
                    </div>
                </div>
                <form className='Add-food-container'>
                    <div className='Add-food-instructions'>
                        <h3>Foods</h3>
                        <h4>Take a peek below to see available food options. Don't see your favorite? Add it below!</h4>
                        <div className='Add-food-text-row add-plus'>
                            <h4 className='Add-text'>Add New Item &nbsp;&nbsp; </h4>
                            <div className='orange-circle-small food-search' onClick={() => {
                                addMenuClicked()
                            }}>
                                <span>+</span>
                            </div>
                        </div>
                    </div>
                    <div className={addInputs}>
                        <hr></hr>
                        <div className='Add-food-text-row'>
                            <input id="search" className='food-input' type="text" placeholder='Add food name...'
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value)
                                }}></input>
                        </div>
                        <div className='Add-food-text-row'>
                            <input id="cuisine"
                                value={cuisine}
                                className='food-input' type="text" placeholder='Add cuisine...' onChange={(e) => {
                                    setCuisine(e.target.value)
                                }}></input>
                        </div>
                        <div className='Add-food-text-row'>
                            <input id="description"
                                value={description}
                                className='food-input' type="text" placeholder='Add description...' onChange={(e) => {
                                    setDescription(e.target.value)
                                }}></input>
                        </div>
                        <div className='Add-food-text-row'>
                            <input id="imageUrl"
                                value={imageUrl}
                                className='food-input' type="text" placeholder='Add image url...' onChange={(e) => {
                                    setImageUrl(e.target.value)
                                }}></input>
                            <div className='orange-circle-small submit-button' onClick={() => {
                                addToDatabase();
                            }}>
                                Submit
                            </div>
                        </div>
                    </div>
                </form>
                <div className='Display-container'>
                    {DisplayOptions()}
                    {editModal}
                </div>
            </div>
        </div>
    );
};

export default MainPage;