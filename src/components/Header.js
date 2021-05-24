import React, {Component} from 'react'
import Cart from './img/shopping-cart-solid.svg'
import './css/Header.css'
import {DataContext} from './Context'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component{
    static contextType = DataContext
    render(){
        const {cart} = this.context
        return(
            <header>
                <div className="logo">
                    <h1><Link to="/productmanage">NIKE</Link></h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/productmanage">Product Manage</Link></li>
                        <li><Link to="/usermanage">User Manage</Link></li>                       
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;