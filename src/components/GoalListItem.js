import React, { Component } from "react";
import moment from 'moment';
// import Moment from 'react-moment';

import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  card: {
    minWidth: 275,
    margin: 15,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: "#333",
  },
  media: {
    height: 0,
    paddingTop: '30%', // 16:9
  },
});

class GoalListItem extends Component {

    render() {
        const { classes } = this.props;

        let { name = "", color = "", image = "", created_at = "" } = this.props
        let backgroundColor = {backgroundColor: color}

        return (
            <Card className={classes.card}>
                <div style={backgroundColor}>
                    &nbsp;
                </div>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {name.substr(0,1)}
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                        <MoreVertIcon />
                        </IconButton>
                    }
                    title={name}
                    subheader={moment(created_at).format('DD/MM/YYYY')}
                    className={classes.title}
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Paella dish"
                  />
            </Card>
        );
    }
}

export default withStyles(styles)(GoalListItem);
