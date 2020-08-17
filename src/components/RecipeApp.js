import React,{useState,useEffect} from 'react'
import Recipeui from './Recipeui'
import axios from 'axios'

function RecipeApp() {
    const [searchIngredient, setSearchIngredient] = useState('chicken');
    const [result, setResult] = useState([]);
    const APP_ID = 'abc28316';
    const APP_KEY = '89bee31554eea325f0a9abba486800c1' ;

    useEffect(()=>{
        makingRequest();
    
    },[])
    function makingRequest(){
    axios.get(`https://api.edamam.com/search?q=${searchIngredient}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    .then(res => setResult(res.data.hits))
    .catch(err => console.log(err))
    }
    function handleSubmit(e) {
        e.preventDefault();
        makingRequest()
    }
    return (
        <div>
            <h1 className='text-center'>Recipe App</h1>
            <form className = 'form' onSubmit={handleSubmit}>
                <div className='form-group'>
                <input type = 'text' className='form-control' value={searchIngredient} onChange = {(e)=> setSearchIngredient(e.target.value)}/>
                </div>
                <button className='btn btn-primary d-block mx-auto'>Search</button>
            </form>
            <div className='mt-5 gridbox'>
            {
                result.map((resultObj,index) => <Recipeui key={index} resultObj={resultObj} />)
            }
            </div>
            
        </div>
    )
}

export default RecipeApp
