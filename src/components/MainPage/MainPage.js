import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import Option from '../Option/Option';
import './MainPage.css'
import seeds from './seeds.json'


const MainPage = () => {

    const {
        setNavBarVisible,
        mainPageVisible, setMainPageVisible,
        setPlayArray
    }
    =useContext(AppContext)

    useEffect(()=>{
        setNavBarVisible('NavBar-container')
        setMainPageVisible('MainPage-main')
    },[])

    const [axiosResults, setAxiosResults] = useState([])
    const [search, setSearch] = useState('')
    const [cuisine, setCuisine] = useState('')
    const [description, setDescription] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [searchArray, setSearchArray] = useState([])
    const [addInputs, setAddInputs] = useState('Add-inputs-closed')
    const [addArrow, setAddArrow] = useState('down-triangle-closed')

    useEffect(()=>{
           axios.get('https://agree-to-disagree.herokuapp.com/foods')
                .then(response => {
                    setAxiosResults(response.data)
                    console.log("fetch")
                })
                .catch(console.error)
    }, [])

    useEffect(()=>{

        if(search===''){
            setSearchArray(axiosResults)
        } else {
            const runSearch = axiosResults.filter((item)=>{
                return item.name.substring(0, search.length).toLowerCase()===search.toLowerCase()
            })
            setSearchArray(runSearch)
        }
    }, [axiosResults, search])

    function DisplayOptions(){
        return searchArray.map((item, index)=>{
            return(
                <div key={index}>
                    <Option 
                        name={item.name}
                        image={item.image}
                        cuisine={item.cuisine}
                        description={item.description}/>
                </div>
            )
        })
    }

    const navigate = useNavigate()

    function createPlayArray(count){
        const shuffled = [...searchArray].sort(()=>0.5 - Math.random());
        const shortened = shuffled.splice(0, count)
        setPlayArray(shortened)
        setMainPageVisible('MainPage-main hidden')
        setTimeout(() => {
            navigate('/play', {replace: true})
        }, 1000);
    }

    function addToDatabase(){
        if(search.length < 1 || cuisine.length<1 || description.length<1 || imageUrl<1){
            alert('Please fill out all boxes to proceed!')
        } else {
            axios.post('https://agree-to-disagree.herokuapp.com/foods', {
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

    function addMenuClicked(){
        if(addArrow==='down-triangle-closed'){
            setAddArrow('down-triangle-open')
            setAddInputs('Add-inputs-open')
        } else {
            setAddArrow('down-triangle-closed')
            setAddInputs('Add-inputs-closed')
        }
    }

    return (
        <div className={mainPageVisible}>
            <div className='MainPage-container'>
                <div className='Play-container'>
                    <h3>Play</h3><br></br>
                    <h4>Are you and your partner having a tough time deciding what to eat? Grab your partner and select a number below to play. We will help you decide what to eat :)</h4><br></br>
                    <div className='orange-circle-container'>
                        <div to="/play" 
                            className='orange-circle-small'
                            onClick={()=>{
                                createPlayArray(5)
                            }}>5</div>

                        <div className='orange-circle-small'
                            onClick={()=>{
                                createPlayArray(10)
                            }}>10</div>
                        <div className='orange-circle-small'
                            onClick={()=>{
                                createPlayArray(20)
                            }}>20</div>
                    </div>
                </div>
                <form className='Add-food-container'>
                    <div className='Add-food-instructions'>
                        <h4>Take a peek below to see the databse of food options. If there are any missing, please add a new meal by completing boxes below!</h4>
                        <br></br>
                        <div className='Add-food-text-row'>
                            <h3 className='Add-text'>Add</h3>
                            <div className='orange-circle-small food-search' onClick={()=>{
                                addMenuClicked()
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className={addArrow} viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className={addInputs}>
                        <div className='Add-food-text-row'>
                            <input id="search" className='food-input' type="text" placeholder='Add food name...' 
                            value={search}
                            onChange={(e)=>{
                                setSearch(e.target.value)
                            }}></input>
                            <div className='orange-circle-small food-search' onClick={()=>{
                                addToDatabase();
                            }}>+</div>
                        </div>
                        <div className='Add-food-text-row'>
                            <input id="cuisine" 
                            value={cuisine}
                            className='food-input' type="text" placeholder='Add cuisine...' onChange={(e)=>{
                                setCuisine(e.target.value)
                            }}></input>
                        </div>
                        <div className='Add-food-text-row'>
                            <input id="description" 
                            value={description}
                            className='food-input' type="text" placeholder='Add description...' onChange={(e)=>{
                                setDescription(e.target.value)
                            }}></input>
                        </div>
                        <div className='Add-food-text-row'>
                            <input id="imageUrl" 
                            value={imageUrl}
                            className='food-input' type="text" placeholder='Add image url...' onChange={(e)=>{
                                setImageUrl(e.target.value)
                            }}></input>
                        </div>
                    </div>
                    
                </form>
                <div className='Display-container'>
                    {DisplayOptions()}
                </div>
            </div>
        </div>
    );
};

export default MainPage;