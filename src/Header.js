import React from 'react';
//import logo from './assets/logo.png';

export default class Header extends React.Component {
    render(){
        return(
            <header>
                <div className="header-left">
                    <span><img src = "assets/logo.png" alt= "logo"/> </span>
                    <span className="header-text">
                        <h2>Delicious</h2>
                        <p>THE BEST FOOD BLOG ON THE WEB</p>
                    </span>
                </div>
                <div className="social-links">
                    <img src="assets/fb-icon.png" alt="Facebook"/>
                    <img src="assets/twit-icon.png" alt="Twitter"/>
                    <img src="assets/gp-icon.png" alt="Google plus, this might need an update."/>
                    <img src="assets/insta-icon.png" alt="Instagram"/>
                    <img src="assets/flic-icon.png" alt="Flickr"/>
                    <img src="assets/pint-icon.png" alt="Pinterest"/>
                    <img src="assets/rss-icon.png" alt="RSS feed"/>
                    <img src="assets/mail-icon.png" alt="Mail link"/>
                </div>
            </header>

        );
    }
}