import React, { Fragment } from 'react';
import { Grid, Paper, Typography, List } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import LeftPane from './LeftPane';
// import RightPane from './RightPane';

const styles ={
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10
    }
}

// look this up
export default ({ exercises }) => 
    <Grid container spacing={3}>
        <Grid item sm>
            <Paper style={ styles.Paper }>
                {/* deconstructing the array */}
                {exercises.map(([group, exercises]) => 
                    <Fragment key={group}>
                        <Typography 
                            variant="h6"
                            style={{ textTransform: 'capitalize' }}
                        >
                            { group }
                        </Typography>
                        <List component="ul">
                            {exercises.map(({ title }) => 
                                <ListItem key={ title } button>
                                    <ListItemText primary={ title } />
                                </ListItem>
                            )}
                        </List>
                    </Fragment>
                )}
            </Paper>
            {/* <LeftPane styles={styles} /> */}
        </Grid>
        <Grid item sm>
            <Paper style={ styles.Paper }>
                <Typography 
                    variant="h2"
                    style={{ textTransform: 'capitalize' }}
                >
                    Welcome!
                </Typography>
                <Typography 
                    variant="subtitle1"
                    style={{ margingTop: 20}}
                >
                    Please select an exercise from the list on the left. 
                </Typography>
            </Paper>
            {/* <RightPane styles={styles} /> */}
        </Grid>
    </Grid>