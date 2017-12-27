import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';

const Title = ({ children, title }) => (
    <Toolbar>
        <ToolbarGroup style={{ margin: 'auto' }}>
            {children && (
                children
            )}
            <ToolbarTitle text={title} style={{ fontSize: '2em' }} />
        </ToolbarGroup>
    </Toolbar>
);

export default Title;