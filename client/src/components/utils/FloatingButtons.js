import React from 'react';
import { Link } from 'react-router-dom';
import { FloatingActionButton } from 'material-ui';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import ContentAdd from 'material-ui/svg-icons/content/add';

const backButtonStyle = {
    position: 'absolute',
    left: 25,
    top: 70,
};

const addPostButtonStyle = {
    position: 'fixed',
    right: 25,
    bottom: 25,
}

export const BackFloatingButton = ({link}) => {

    return (
        <FloatingButtonContainer mini={true} style={backButtonStyle} link={link}>
            <NavigationArrowBack />
        </FloatingButtonContainer>
    );
};

export const AddPostFLoatingButton = ({link}) => {
    return (
        <FloatingButtonContainer mini={false} style={addPostButtonStyle} link={link}>
            <ContentAdd />
        </FloatingButtonContainer>  
    );
};

const FloatingButtonContainer = ({mini, style, link, children}) => {
    return (
        <FloatingActionButton mini={mini} style={style} containerElement={<Link to={link} />}> 
            {children && (children)}
        </FloatingActionButton>  
    );
};