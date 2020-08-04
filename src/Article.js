import React, { Component } from 'react'
import paragraphs from './paragraphs';
import Paragraph from './Paragraph';

export default class Article extends Component {
    render() {
        return (
            <article>
                {
                    paragraphs.map((para) => <Paragraph paragraph = {para} />)
                }
                
            </article>
        )
    }
}
