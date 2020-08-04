import React from 'react';
//import logo from './assets/logo.png';

import SocialIcons from './SocialIcons';
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
                    {this.props.data.map(icon  =>  <SocialIcons src= {icon.src} alt = {icon.alt}/>)
                    }

                    
                </div>
            </header>

        );
    }
}