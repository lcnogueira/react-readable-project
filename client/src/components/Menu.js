import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

    render() {
        return (
            <div id="menu">
                <ol>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/category">
                        <li>Category</li>
                    </Link>
                </ol>
            </div>
        );
    }

}

export default Menu;