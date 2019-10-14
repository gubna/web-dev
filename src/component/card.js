import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Joy from '../images/joyoftravel.png';

const useStyles = makeStyles({
  card: {
    maxWidth: 1200,
  },
  media: {
    height: 200,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {Joy}
          title="Joy of Travel"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Joy Of Vacations
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A webpage for a Travel Agency I made using Gatsby and Netlify.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button  size="small" color="primary" ><a href="https://www.joyofvacations.com/">Link to Project</a>
          
        </Button>
      </CardActions>
    </Card>
  );
}
