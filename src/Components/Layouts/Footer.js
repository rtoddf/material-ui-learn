import React from 'react';
import { Paper, Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';

export default ({muscles}) =>
    <Paper>
        <Tabs
        value={0}
        indicatorColor="primary"
        textColor="secondary"
        centered
        >
            <Tab label="All" />
            {muscles.map(muscles => 
                <Tab key={ muscles } label={ muscles } />
            )}
        </Tabs>
    </Paper>