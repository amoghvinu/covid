import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    componentDidMount(){
        axios.get("https://covid19.mathdro.id/api")
        .then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Home;