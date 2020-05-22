import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Demo.css';
import "bootstrap/dist/css/bootstrap.min.css";


export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar" style={{backgroundColor:"#92436A"}}>
                
            
              
                <div class="container">
                    <div class="navbar-header">
                        <a class="navbar-brand ml-left text-warning  text-lg brand-text" href="#">
                            C<i class="fas fa-virus"style={{color:"lightblue"}}></i>vid-19 
                        </a>                    
                        
                    </div>
                    <ul class="navbar-nav ml-auto text-light d-inline-block">
                        <li class="nav-item d-inline-block mr-4">
                            <i class="fab fa-react fa-2x" id="react-logo" />
                        </li>
                    </ul>
                </div>
            
          </nav>
          
        );
    }
}




