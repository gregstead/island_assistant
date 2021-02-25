import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  TextField,
  Typography,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import API from "../utils/API";

function Items() {
  const [searchState, setSearchState] = useState({
    category: "",
    searchTerm: "",
  });

  const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
    },
    heroSearch: {},
  }));

  const classes = useStyles();

  function useEffect() {
    console.log(searchState);
  }
  useEffect();

  function handleChange(e) {
    const { name, value } = e.target;
    setSearchState({
      ...searchState,
      [name]: value,
    });
  }

  return (
    <div>
      <Container>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
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
            <div className={classes.heroSearch}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "25vw" }}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={handleChange}
                      value={searchState.category}
                      label="Category"
                      name="category"
                    >
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
                  {/* <TextField
                    // margin="dense"
                    id="itemSelect"
                    value="Category"
                    label="Category"
                    onChange={handleChange}
                    select
                  >
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
                  </TextField> */}
                </Grid>
                <Grid item>
                  <TextField
                    type="search"
                    id="itemText"
                    label="Item name"
                    value={searchState.searchTerm}
                    name="searchTerm"
                    onChange={handleChange}
                  ></TextField>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}

export default Items;
