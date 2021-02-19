import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      padding:"0 10px",
      marginBottom:"10px"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 18,
    }
  });

const Tile = (props) => {
    const classes = useStyles();
    return(
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title}>
                    {props.title_1} : {props.value_1}
                </Typography>
                <Typography className={classes.title}>
                    {props.title_2} : {props.value_2}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Tile