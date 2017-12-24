import React from 'react';
import { Subheader } from 'material-ui';

const Title = (props) => {
    
    const { title } = props;
    return (
        <Subheader style={{textAlign: 'center', fontSize: '2em'}}>{title}</Subheader>
    );
    
};

export default Title;