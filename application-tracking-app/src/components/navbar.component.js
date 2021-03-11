import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to = "/" className="navbar-brand">ApplicationTracker</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item active">
                            <Link to="/" className="nav-link">Applications <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create Users</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/application" className="nav-link">Create Application</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}