import React from 'react';
import './Recipe.css'

const Recipe = (props) =>{
    return(
    <div className="recipe">
      <div className="box">
        <h1>{props.title}</h1>
        <img className="recipe-image" src={props.image} alt=""/>
        <p>Calories:{props.calories}</p>
        <p>Ingredients:</p>
        <ol>
          {props.ingredients.map(ingrident => (
            <li>{ingrident}</li>
          ))}
        </ol>
        </div>
    </div>
    );
}
export default Recipe;