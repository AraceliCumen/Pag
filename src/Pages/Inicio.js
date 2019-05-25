import React, { Component } from 'react';

import Preloader from '../Components/Preloader';
import Menu from '../Components/Menu';
import Section1 from '../Components/Section1'

class Inicio extends Component {

    render(){
        return(
            <div>
                <Menu/>
                <Section1/>
            </div>
        );
    }
}

export default Inicio;