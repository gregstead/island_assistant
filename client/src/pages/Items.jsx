import React, { useEffect, useState } from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Container, FormControl, Grid, InputLabel, Link, MenuItem, TextField, Typography, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import BtnStyle from "../components/Button/Button";
import API from "../utils/API";

function Items() {
  const [searchState, setSearchState] = useState({
    category: "",
    searchTerm: "",
  });

  const useStyles = makeStyles((theme) => ({
    heroSearch: {},
  }));

  const classes = useStyles();

  function useEffect() {
    console.log(searchState);
  }

  function handleClick(e) {
    e.preventDefault();
    API.getOne(searchState.category, searchState.searchTerm).then((res) => {
      console.log(res);
    });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setSearchState({
      ...searchState,
      [name]: value,
    });
  }

  return (
    <div>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" gutterBottom variant="h2" style={{ fontFamily: "FinkHeavy", fontSize: "50px", height: "50px", marginBottom: "30px", marginTop: "90px", textAlign: "center" }}>
              {" "}
              Swap or Drop
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo expedita placeat in dicta ab, quod magni quia iure quaerat non neque velit ducimus sed debitis! Doloribus voluptatibus
              dolore incidunt cumque?
            </Typography>
            <div className={classes.heroSearch}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <FormControl variant="outlined" className={classes.formControl} style={{ width: "25vw" }}>
                    <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                    <Select labelId="demo-simple-select-outlined-label" id="demo-simple-select-outlined" onChange={handleChange} value={searchState.category} label="Category" name="category">
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
                  <TextField label="Item name" name="searchTerm" onChange={handleChange} type="search" value={searchState.searchTerm} variant="outlined" style={{ width: "25vw" }}></TextField>
                  <BtnStyle onClick={handleClick} variant="contained"></BtnStyle>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default Items;
