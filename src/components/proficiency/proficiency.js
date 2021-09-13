import React from 'react';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography  from '@material-ui/core/Typography';
import './proficiency.component.scss'

const useStyles = makeStyles({
    root: {
      minWidth: 185,
      minHeight: 265,
    },
    h3: {
        textAlign: 'center',
        fontSize: 25
    },
    gridContainer: {
        paddingLeft: '20px',
        paddingRight: '35px'
    }
  });

export default function Proficiency() {
    const classes = useStyles();
        return(
            <div className="proficiency-page">
                <h1>My Proficiency:</h1>
                <Grid container spacing={4} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={3}>
                       <Card className={classes.root}>
                               <CardContent>
                               <Typography className={classes.h3} component="h3" >Frontend</Typography> 
                               <Typography component="p">HTML, CSS SCSS/SASS Javascript and Bootstrap</Typography>
                              </CardContent>
                        </Card> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                       <Card className={classes.root} >
                            <CardContent>
                               <Typography className={classes.h3} component="h3">Frameworks</Typography>
                               <Typography component="p">React, Angular, AngularJS, Ionic and Laravel</Typography>
                            </CardContent>
                        </Card> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                       <Card className={classes.root}>
                            <CardContent>
                               <Typography className={classes.h3} component="h3">UI/UX</Typography>
                               <Typography component="p">Adobe Xd, Photoshop, Figma and Minimal Design</Typography>
                            </CardContent>
                        </Card> 
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                       <Card className={classes.root} >
                            <CardContent>
                               <Typography className={classes.h3} component="h3">Office</Typography>
                               <Typography component="p">LibreOffice and Office365</Typography>
                            </CardContent>
                        </Card> 
                    </Grid>
                </Grid>
            </div>
        )
    }


