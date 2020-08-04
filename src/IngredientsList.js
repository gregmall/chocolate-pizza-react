import React, { Component } from 'react'
import OneIngredient from './OneIngredient.js';

export default class IngredientsList extends Component {
    render() {
        return (
            <ul className = {this.props.side} >
                {
                    this.props.ingredients.map((ingredient) => <OneIngredient ingredient = {ingredient}/>)
                }
            </ul>
        )
    }
}
