import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Smart from '../images/verysmurt.png';

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
          image= {Smart}
          title="very smurt studios"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
          Very Smurt Production Studios
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A react webpage built with material-ui that showcases my son's music, icon links to his soundcloud and bandcamp pages.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button  size="small" color="primary" ><a href="https://stupefied-benz-c274dc.netlify.com">Link to Project</a>
          
        </Button>
      </CardActions>
    </Card>
  );
}