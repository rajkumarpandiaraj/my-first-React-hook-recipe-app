import React from 'react'

function RecipeUI(props) {
    const {resultObj} = props;
    return (
        <div className='p-4'>
            <img src={resultObj.recipe.image} alt='Dish'/>
            <h1>{resultObj.recipe.label}</h1>
            <ul>
                {
                    resultObj.recipe.ingredientLines.map((ingre,index) => <li key={index}>{ingre}</li>)
                }
            </ul>
        </div>
    )
}

export default RecipeUI
