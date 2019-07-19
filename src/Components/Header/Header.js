import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <header>
                <h1>SHELFIE</h1>
                <div className="headerButtons">
                    <Link to="/"><button>Dashboard</button></Link>
                    <Link to="/add"><button>Add Inventory</button></Link>
                </div>
            </header>
        )
    }
}

export default Header;