import React, { useState, useEffect } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Container, FormControl, Grid, InputLabel, MenuItem, TextField, Typography, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import BtnStyle from "../components/Button/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import API from "../utils/API";
// import { userContext } from "../userContext";

function Items() {
  const [searchState, setSearchState] = useState({
    category: "",
    searchTerm: "",
  });

  const [itemState, setItemState] = useState([]);
  // const [item, setItem] = useEffect([]);

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

  function handleDeleteClick(e, data) {
    e.preventDefault();
    const newArr = [...itemState]; // make a copy of the state
    const idx = newArr.indexOf(data);
    if (idx !== -1) {
      // if data is in newArr
      newArr.splice(idx, 1); // splice it
      setItemState([...newArr]); // update state
    }
  }

  const itemCards = itemState.map((data, index) => {
    return (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card id="card-background" className={classes.card}>
          <CardMedia id="item-img" className={classes.cardMedia} image={data.image_url} title={data.name} />
          <CardContent className={classes.cardContent}>
            <Typography id="card-text1" component="h2" gutterBottom variant="h5">
              {data.name}
            </Typography>
            <Typography id="item-label">{data.catchphrases[0]}</Typography>
            <br />
            <Typography id="card-text2">Bell value: {data.sell_nook}</Typography>
            <CardActions>
              <Button
                id="item-btn"
                size="medium"
                onClick={(e) => {
                  handleFavoriteClick(e, data);
                }}
              >
                ⭐Favorite
              </Button>
              <Button
                id="item-btn"
                size="medium"
                onClick={(e) => {
                  handleDeleteClick(e, data);
                }}
              >
                <DeleteIcon style={{ color: "red" }} />
                Delete
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <div>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography id="page-header" component="h1" gutterBottom variant="h2">
            {" "}
            Swap or Drop
          </Typography>
          <Typography id="page-text" color="textSecondary" paragraph variant="h5">
            Choose a category and type in the name of an item to compare!
          </Typography>
          <div id="searchBox" className={classes.heroSearch}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <FormControl id="input-background" className={classes.formControl} variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                  <Select id="demo-simple-select-outlined" label="Category" labelId="demo-simple-select-outlined-label" name="category" onChange={handleChange} value={searchState.category}>
                    <MenuItem name="category" value="fish">
                      Fish
                    </MenuItem>
                    <MenuItem name="category" value="bugs">
                      Bugs
                    </MenuItem>
                    <MenuItem name="category" value="sea">
                      Sea Creatures
                    </MenuItem>
                    <MenuItem name="category" value="art">
                      Art
                    </MenuItem>
                    <MenuItem name="category" value="recipes">
                      Recipes
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item>
                <TextField id="input-background" label="Item name" name="searchTerm" onChange={handleChange} type="search" value={searchState.searchTerm} variant="outlined"></TextField>
                {/* <BtnStyle id="btn" onClick={handleClick} variant="contained"></BtnStyle> */}
              </Grid>
            </Grid>
            <BtnStyle id="btn" onClick={handleClick} variant="contained"></BtnStyle>
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

export default Items;
