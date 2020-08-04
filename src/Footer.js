import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
           <footer>
               <div className="footer-top">
               <div>
                <img src="assets/van-pic.png" alt="Vanessa Stevenson"/>
              </div>
              <div className="bio">
                <h1>Vanessa Stevenson</h1>
                Food enthusiast, photography fan.  Add a pinch of raw foodism and that's pretty much who I am.

            </div>
            <div className="centered-div"><button>Share button</button>
            </div>

               </div>
               <div className="footer-bottom centered-div">
                   <img src ="assets/small-logo.png" alt= "small logo" />
               </div>
               <div className="copywrite">
               <center>Delicious © 2013 •  All Rights Reserved. </center>
               <br />
               <center>Proudly published with Ghost.</center>
               </div>
           </footer>
        )
    }
}
