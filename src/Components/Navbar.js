import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        let logoStyle = {
            fontFamily : 'Potta One',
            transform : 'translateX(-70px)',
            fontSize : 40
        }
        let linkStyle = {
            //transform : 'translateX(115px)',
            fontSize : '15px !important'
        }
        return (
            <div>
                <div className="navbar-fixed">
                    <nav className="nav-wrapper cyan lighten-2  ">
                        <div className="container">
                        <NavLink to="/" className="brand-logo" style={logoStyle}>CataBros</NavLink>
                        <Link className="sidenav-trigger" data-target="mobile-links">
                            <i class="material-icons">menu</i>
                        </Link>
                        <ul class="right hide-on-med-and-down" style={linkStyle}>
                            <li><a href="/">Home</a></li>
                            <li id='homePage'><a href="/search">Search</a></li>
                            <li><a href="/searchbygroup">Search By Group</a></li>
                            <li><Link className="btn white indigo-text pulse">Login</Link></li>
                        </ul>
                        
                        </div>
                    </nav>
                    
                </div>
            </div>
        )
    }
}
