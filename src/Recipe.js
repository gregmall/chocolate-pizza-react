import React, { Component } from 'react'
import IngredientsList  from './IngredientsList';
import left from './ingredients-left';
import right from './ingredients-right';
export default class Recipe extends Component {
    render() {
        return (
            <div className="recipe">
               <IngredientsList side = 'left' ingredients = {left} />
               <IngredientsList side = 'right' ingredients = {right} />
                
            </div>
        )
    }
}
