import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { flexbox } from '@material-ui/system';
import Jerk from '../images/Opti-Grab1.png';

const useStyles = makeStyles({
  card: {
    maxWidth: 1200,
  },
  media: {
    height: 200,
  },
  content: {
    paddingLeft: 50,
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {Jerk}
          title="Opti-Grab"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
         Opti-Grab
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Add from the Steve Martin movie "The Jerk". Made with create-react-app, material-ui, and deployed through netlify.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button  size="small" color="primary" ><a href="https://elastic-lichterman-87caec.netlify.com">Link to Project</a>
          
        </Button>
      </CardActions>
    </Card>
  );
}