import React from "react";
import { Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: { minWidth: 275 },
  bullet: { display: "inline-block", margin: "0 2px", transform: "scale(0.8)" },
  title: { fontSize: 14 },
  pos: { marginBottom: 12 },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined" style={{ borderRadius: "28px" }}>
      <CardContent>

        <Typography 
          variant="h5" 
          component="h2" 
          style={{ textAlign: "center" }}>
            Flowers
        </Typography>

        <Typography 
          variant="body2" 
          component="p" 
          style={{ textAlign: "center" }}>
            information goes here
        </Typography>

      </CardContent>

      <CardActions style={{ justifyContent: "center" }}>
        <Button size="small">link to page goes here</Button>
      </CardActions>
    </Card>
  );
}
