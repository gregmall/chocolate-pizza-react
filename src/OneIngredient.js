import React, { Component } from 'react'

export default class OneIngredient extends Component {
    render() {
        return (
            <li>
                <input type = "checkbox" />
                <label>{this.props.ingredient}</label>
            </li>

        )
    }
}
