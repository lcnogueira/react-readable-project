import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsByCategory } from '../actions';

class Category extends Component {

     componentDidMount(){
        const { category } = this.props.match.params;
        this.props.fetchPostsByCategory(category);
    }

    //Compare if the previous category is different from the nextCategory. If it is, fetch posts by category
    componentWillReceiveProps(nextProps){
        const { category } = this.props.match.params;
        const nextCategory = nextProps.match.params.category;
        if(category !== nextCategory)
            this.props.fetchPostsByCategory(nextCategory);
            
    }

    render(){

        const { category } = this.props.match.params;
        const { posts } = this.props;
        
        return (
            <div>
                <h1>{category}</h1>
                <div>
                    <ol>
                        {posts && posts.map((post) => (
                            <li key={post.id}>
                                {post.title}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state){
    const{ posts } = state;
    
    return{
       posts: posts.allPosts
    } 
}

function mapDispatchToProps(dispatch){
    return {
        fetchPostsByCategory: (category) => dispatch(fetchPostsByCategory(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);