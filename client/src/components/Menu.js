import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../utils/Api';

class Menu extends Component {

    constructor() {
        super();
        this.state = {
            categories: [],
        };
    };

    componentDidMount() {
        Api.getCategories().then((categories) => {
            this.setState({ categories });
        })
    };

    render() {

        const {categories} = this.state;

        return (
            <div id="menu">
                <ol>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    {categories && categories.map((category) => (
                        <Link to={category.path} key={category.name}>
                            <li>{category.name}</li>
                        </Link>
                    ))}
                </ol>
            </div>
        );
    }

}

export default Menu;