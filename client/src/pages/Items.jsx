import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

function Items() {
  const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Swap or Drop
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              expedita placeat in dicta ab, quod magni quia iure quaerat non
              neque velit ducimus sed debitis! Doloribus voluptatibus dolore
              incidunt cumque?
            </Typography>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default Items;
