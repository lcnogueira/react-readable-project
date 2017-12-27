import React, { Component } from 'react';
import { IconButton, MenuItem, IconMenu } from 'material-ui';
import { connect } from 'react-redux';
import { sortPosts } from '../actions';
import { TIMESTAMP_ORDER, SCORE_ORDER } from '../utils/orderTypes';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';

class PostOrderControl extends Component {

    handleOrderChange = (event, value) => { this.props.sortPosts(value); };

    render() {
        const { postsOrder } = this.props;

        return (
            <IconMenu
                value={postsOrder}
                onChange={this.handleOrderChange}
                iconButtonElement={<IconButton><ContentFilter /></IconButton>}
            >
                <MenuItem value={SCORE_ORDER} primaryText='Vote Score' />
                <MenuItem value={TIMESTAMP_ORDER} primaryText='Time' />
            </IconMenu>
        )
    }
}

function mapStateToProps({ postsOrder }) {
    return {
        postsOrder
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sortPosts: (order) => dispatch(sortPosts(order))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostOrderControl);
