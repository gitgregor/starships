import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 500,

    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
        // fontSize: 12,
    },
    title: {
        fontSize: 22,
        color: "green",
    },
    player: {
        color: "lightgreen",
        fontSize: 22,
        marginLeft: 20,
    },
    pos: {
        marginBottom: 12,
        fontSize: 20
    },
    starShipName: {
        color: "red",
        margin: 20,
    },
    qutation: {
        fontStyle: "italic"
    },
});

export default function SimpleCard(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Player{bull}Two
        </Typography>
                <Typography className={classes.player} color="textSecondary" gutterBottom>
                    OBI-WAN
        </Typography>
                <Typography variant="h7" component="h2"  >
                    Starship{bull}Class :
                </Typography>
                <Typography className={classes.starShipName} variant="h6" component="h2"  >
                    {props.spaceShipName}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {`# people in the CREW  : `}
                    {props.numberOfCrew2}
                </Typography>
                <Typography className={classes.qutation} variant="body2" component="p">
                    '"May the Force be with you"'
          <br />
                    -  Obi-Wan
                </Typography>
            </CardContent>
            {/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card >
    );
}
