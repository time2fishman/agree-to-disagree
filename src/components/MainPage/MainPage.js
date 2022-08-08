import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import Option from '../Option/Option';
import './MainPage.css'
import seeds from './seeds.json'


const MainPage = () => {

    const {
        mainPageVisible, setMainPageVisible,
        playArray, setPlayArray
    }
    =useContext(AppContext)

    const [axiosResults, setAxiosResults] = useState([])
    const [search, setSearch] = useState('')
    const [searchArray, setSearchArray] = useState([])

    useEffect(()=>{
           axios.get('https://agree-to-disagree.herokuapp.com/foods')
                .then(response => {
                    setAxiosResults(response.data)
                })
                .catch(console.error)
    }, [])



    useEffect(()=>{

        if(search===''){
            setSearchArray(axiosResults)
        } else {
            const runSearch = axiosResults.filter((item)=>{
                return item.name.substring(0, search.length).toLowerCase()===search
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

    return (
        <div className={mainPageVisible}>
            <div className='MainPage-container'>
                <div className='Play-container'>
                    <h3>Play</h3><br></br>
                    <h4>Select a number below to start! Add additional instruction text here...</h4><br></br>
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
                    <input className='food-input' type="text" placeholder='Type to add food...' onChange={(e)=>{
                        setSearch(e.target.value)
                    }}></input>
                    <div className='orange-circle-small food-search'>+</div>
                </form>
                <div className='Display-container'>
                    {DisplayOptions()}
                </div>
            </div>
        </div>
    );
};

export default MainPage;