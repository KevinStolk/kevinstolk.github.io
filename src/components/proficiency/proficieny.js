import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography  from '@material-ui/core/Typography';
import './proficiency.component.css'

const useStyles = makeStyles({
    root: {
      minWidth: 185,
      minHeight: 265,
    },
    h3: {
        textAlign: 'center',
        fontSize: 20
    },
    pos: {
      marginBottom: 12,
    },
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '20px'
    }
  });

export default function Profiency() {
    const classes = useStyles();
        return(
            <div className="profiency-page">
                <h2>My Proficieny:</h2>
                <Grid container spacing={4} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={3}>
                       <Card className={classes.root}>
                               <CardContent>
                               <Typography className={classes.h3} component="h3" >Frontend</Typography> 
                               <Typography component="p">As for my Frontend stuff I use: HTML, CSS SCSS/SASS and Bootstrap</Typography>
                              </CardContent>
                        </Card> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                       <Card className={classes.root} >
                            <CardContent>
                               <Typography className={classes.h3} component="h3">Frameworks</Typography>
                               <Typography component="p">As for Frameworks im used to working with: React, Angular, AngularJS, Ionic and Laravel</Typography>
                            </CardContent>
                        </Card> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                       <Card className={classes.root}>
                            <CardContent>
                               <Typography className={classes.h3} component="h3">UI/UX</Typography>
                               <Typography component="p">For my UI/UX designs I use Adobe CC products such as: Photoshop & Adobe Xd</Typography>
                               <Typography>I prefer to keep my designs minimal and clean as possible with minimal colours and Material Design</Typography> 
                            </CardContent>
                        </Card> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                       <Card className={classes.root} >
                            <CardContent>
                               <Typography className={classes.h3} component="h3">Office</Typography>
                               <Typography component="p">Office Tools</Typography>
                            </CardContent>
                        </Card> 
                    </Grid>
                </Grid>
            </div>
        )
    }


