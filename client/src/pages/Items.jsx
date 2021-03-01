import React, { useState } from "react";
import {
  Button,
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
import BtnStyle from "../components/Button/Button";
import API from "../utils/API";

function Items() {
  const [searchState, setSearchState] = useState({
    category: "",
    searchTerm: "",
  });
  const [itemState, setItemState] = useState([]);

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

  function handleFavoriteClick(e) {
    e.preventDefault();
    // get user, set user item
    console.log(`e:`, e);
  }

  const itemCards = itemState.map((data, index) => {
    return (
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={data.image_url}
            title={data.name}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {data.name}
            </Typography>
            <Typography>{data.catchphrases[0]}</Typography>
            <Typography>Bell value: {data.sell_nook}</Typography>
            <CardActions>
              <Button size="small" onClick={handleFavoriteClick}>
                Favorite
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
          <Typography
            component="h1"
            gutterBottom
            variant="h2"
            style={{
              fontFamily: "FinkHeavy",
              fontSize: "50px",
              height: "50px",
              marginBottom: "30px",
              marginTop: "90px",
              textAlign: "center",
            }}
          >
            {" "}
            Swap or Drop
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Choose a category and type in the name of an item to compare!
          </Typography>
          <div className={classes.heroSearch}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  style={{ backgroundColor: "mintcream", width: "25vw" }}
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
              </Grid>
              <Grid item>
                <TextField
                  label="Item name"
                  name="searchTerm"
                  onChange={handleChange}
                  type="search"
                  value={searchState.searchTerm}
                  variant="outlined"
                  style={{ backgroundColor: "mintcream", width: "25vw" }}
                ></TextField>
                <BtnStyle onClick={handleClick} variant="contained"></BtnStyle>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      {/* End Hero Unit */}
      <main>
        <Container className={classes.cardGrid}>
          <Grid container spacing={4} alignItems="center" justify="center">
            {itemCards}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Items;
