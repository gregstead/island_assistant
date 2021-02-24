import React, { useState } from "react";
import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import SearchBox from "../components/Search/SearchBox";
import API from "../utils/API";

const useStyles = makeStyles({
  root: { maxWidth: 690 },
  media: { height: 300 }
});

export default function MediaCard() {
  const classes = useStyles();

  const [search, setSearch] = useState("");
  const [villager, setVillager] = useState([]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearch(value);
  };
  const handleClick = (event) => {
    API.getVillagerNames(search).then((results) => {
    // API.getOne("villagers").then((results) => {
      console.log(search, results.data);
      setVillager(results.data);
    });
  };

  return (
    <>
      <SearchBox 
        search={search} 
        handleClick={handleClick} 
        handleInputChange={handleInputChange} />

        {villager.length > 0 ? villager.map((villager) => {

          return (
            <Card className={classes.root} style={{ justifyContent: "center", margin: "auto" }}>
              
              <CardActionArea>
                <Typography 
                  gutterBottom variant="h4" 
                  component="h2" 
                  style={{ textAlign: "center", marginTop: "50px", marginBottom: "25px" }}>{villager.name}
                </Typography>

                <CardMedia
                  className={classes.media}
                  image= {villager.image_url}
                  title="Contemplative Reptile"
                  style={{ border: "solid", marginLeft: "100px", marginTop: "0px", marginBottom: "25px", marginRight: "100px" }}
                />

                <CardContent style={{ textAlign: "center" }}>
                  <Typography color="textSecondary" component="p">{villager.species}</Typography>
                  <Typography color="textSecondary" component="p">{villager.birthday_month} {villager.birthday_day}</Typography>
                  <Typography color="textSecondary" component="p">{villager.personality}</Typography>
                  <Typography color="textSecondary" component="p">{villager.sign}</Typography>
                  <Typography color="textSecondary" component="p">{villager.fav_styles}</Typography>
                  <Typography color="textSecondary" component="p">{villager.fav_colors}</Typography>
                  <Typography color="textSecondary" component="p">{villager.hobby}</Typography>
                </CardContent>

              </CardActionArea>

              <CardActions style={{ justifyContent: "center" }}>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>
              </CardActions>

            </Card>
          );
        })
        : ""}
    </>
  );
}
