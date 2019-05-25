import React, { Component } from 'react';

class Menu extends Component {

    render(){
        return(
            <div className="menu_area">
                <nav className="navbar navbar-expand-lg navbar-light">
                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                        <img></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    {/* Menu Area */}
                    <div className="collapse navbar-collapse" id="ca-navbar">
                        <ul className="navbar-nav ml-auto" id="nav">
                            <li className="nav-item active"><a className="nav-link" href="#home">Inicio</a></li>
                            <li className="nav-item"><a className="nav-link" href="#about">Autentikam</a></li>
                            <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                            <li className="nav-item"><a className="nav-link" href="#screenshot">Screenshot</a></li>
                            <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
                            <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
                            <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                        </ul>
                        <div className="sing-up-button d-lg-none">
                            <a href="#">Sign Up Free</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Menu;