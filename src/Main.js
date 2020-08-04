import React, { Component } from 'react';
import MainTop from './MainTop';
import Picture from './Picture';
import Recipe from './Recipe.js';
import Article from './Article';

export default class Main extends Component {
    render() {
        return (
            <main>
               <MainTop />
               <Picture />
               <Article />
               <Recipe />
            </main>
        )
    }
}
