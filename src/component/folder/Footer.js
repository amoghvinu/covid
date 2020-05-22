import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light" >
                        Developed by:
                        <span className="text-warning">
                            AMOGH B
                        </span>
                        ,Using <i class="fab fa-react" /> Reactjs
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Footer;