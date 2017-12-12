import React, { Component } from 'react';

class Category extends Component {

    render(){

        const {category} = this.props.match.params;
        
        return (
            <div>
                <h1>{category}</h1>
            </div>
        );
    }

}

export default Category;