import React, { Component } from 'react'

export default class MainTop extends Component {
    render() {
        return (
            <div className="main-top"> 
            <h1>Chocolate Pizza</h1>
            <div className="dateline">
                <div className="date"> POSTED ON 15 DEC 2013 / DESSERTS</div>
            </div>
            <div><img src="assets/print-icon.png" alt="print"/>print</div>
        </div>
        )
    }
}
