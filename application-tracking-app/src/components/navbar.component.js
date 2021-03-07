import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
                <Link ClassName="navbar-brand" href="#">Navbar</Link>
                <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span ClassName="navbar-toggler-icon"></span>
                </button>
                <div ClassName="collapse navbar-collapse" id="navbarNav">
                    <ul ClassName="navbar-nav">
                        <li ClassName="nav-item active">
                            <Link to="/" ClassName="nav-link">Applications <span ClassName="sr-only">(current)</span></Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link to="/user" ClassName="nav-link">Create User</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link ClassName="nav-link" href="#">Pricing</Link>
                        </li>
                        <li ClassName="nav-item">
                            <Link ClassName="nav-link disabled" href="#">Disabled</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}