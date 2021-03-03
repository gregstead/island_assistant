import React, { useState, useEffect } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Container, FormControl, Grid, InputLabel, MenuItem, TextField, Typography, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import API from "../utils/API";

function Favorites() {
  const [searchState, setSearchState] = useState({
    category: "",
    searchTerm: "",
  });

  const [itemState, setItemState] = useState([]);

  useEffect(() => {
    API.getOne("fish", "koi").then((results) => {
      setItemState([results.data]);
    });
  }, []);

  const useStyles = makeStyles((theme) => ({
    heroSearch: {},
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // 16:9
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  function handleClick(e) {
    e.preventDefault();
    API.getOne(searchState.category, searchState.searchTerm).then((res) => {
      // Update item state array to render cards
      setItemState((itemState) => [...itemState, res.data]);
      console.log(itemState);
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSearchState({
      ...searchState,
      [name]: value,
    });
  }

  function handleFavoriteClick(e, data) {
    e.preventDefault();
    const id = localStorage.getItem("tokens");
    API.addUserItem(id, data);
    console.log("done");
  }

  function handleDeleteClick(e) {
    e.preventDefault();
    console.log(`e:`, e);
  }

  const itemCards = itemState.map((data, index) => {
    return (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card id="card-background" className={classes.card}>
          <CardMedia id="fav-img" className={classes.cardMedia} image={data.image_url} title={data.name}/>
          <CardContent className={classes.cardContent}>
            <Typography id="card-text1" component="h2" gutterBottom variant="h5">
              {data.name}
            </Typography>
            <Typography id="card-text2">Bell value: {data.sell_nook}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <div>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography id="page-header" component="h1" gutterBottom variant="h2">{" "}Hi, First Name Goes Here!</Typography>< br/>
          <Typography id="page-text" color="textSecondary" paragraph variant="h5">Put User Name Here</Typography>
          <Typography id="page-text" color="textSecondary" paragraph variant="h5">Put Friend Code Here</Typography>
          <Typography id="page-text" color="textSecondary" paragraph variant="h5">Put Dream Code Here</Typography>
          <div className={classes.heroSearch}>
            <Grid container spacing={2} justify="center">
            </Grid>
          </div>
        </Container>
      </div>
      {/* End Hero Unit */}
      <main>
        <Container className={classes.cardGrid}>
          <Grid alignItems="center" justify="center" container spacing={4}>
            {itemCards}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Favorites;
