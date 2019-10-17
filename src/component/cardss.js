import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import People from '../images/Some Names Bios of Interesting People.png';
import { flexbox } from '@material-ui/system';

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
          image= {People}
          title="Some names and bios of interesting people"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
         Some names and bios of interesting people.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A webpage of some interesting, controversial and iconic people made with HTML & CSS deployed through github.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button  size="small" color="primary" ><a href="https://gubna.github.io/">Link to Project</a>
          
        </Button>
      </CardActions>
    </Card>
  );
}