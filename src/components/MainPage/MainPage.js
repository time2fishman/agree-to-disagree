import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import Option from '../Option/Option';
import './MainPage.css'
import seeds from './seeds.json'


const MainPage = () => {

    const {
        mainPageVisible, setMainPageVisible
    }
    =useContext(AppContext)

    const [axiosResults, setAxiosResults] = useState([])
    const [search, setSearch] = useState('')
    const [searchArray, setSearchArray] = useState([])

    useEffect(()=>{
           axios.get('http://localhost:8000/foods/')
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

    return (
        <div className={mainPageVisible}>
            <div className='MainPage-container'>
                <div className='Play-container'>
                    <h3>Play</h3><br></br>
                    <h4>Select a number below to start! Add additional instruction text here...</h4><br></br>
                    <div className='orange-circle-container'>
                        <div className='orange-circle-small'>5</div>
                        <div className='orange-circle-small'>10</div>
                        <div className='orange-circle-small'>20</div>
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