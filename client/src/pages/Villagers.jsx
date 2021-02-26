import React, { useState } from "react";
import { Button, Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import SearchVillager from "../components/Search/SearchVillager";
import API from "../utils/API";

const useStyles = makeStyles({
  root: { maxWidth: 690 },
  media: { height: 300 }
});

export default function MediaCard(props) {
  const classes = useStyles();

  const [search, setSearch] = useState("");
  const [villager, setVillager] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleClick = (e) => {
    API.getVillagerNames(search).then((results) => {
    // API.getOne("villagers").then((results) => {
      console.log(search, results.data);
      setVillager(results.data);
    });
  };

  return (
    <>
      <SearchVillager 
        search={search} 
        handleClick={handleClick} 
        handleInputChange={handleInputChange} />

        {villager.length > 0 ? villager.map((villager) => {

          return (
            <Card className={classes.root} style={{ backgroundColor: "#fff9e5", borderRadius: "25px", justifyContent: "center", margin: "auto" }}>
              
              <CardActionArea>
                <Typography 
                  gutterBottom variant="h4" 
                  component="h2" 
                  style={{ textAlign: "center", marginTop: "25px", marginBottom: "25px" }}>{villager.name}
                </Typography>

                <CardMedia
                  className={classes.media}
                  image= {villager.image_url}
                  title="Contemplative Reptile"
                  style={{ alignContent: "center", border: "solid #786951", borderRadius: "25px", margin: "auto", width: "29%" }}
                />

                <CardContent style={{ textAlign: "center" }}>
                  <Typography component="p">{villager.species}</Typography>
                  <Typography component="p">{villager.birthday_month} {villager.birthday_day}</Typography>
                  <Typography component="p">{villager.personality}</Typography>
                  <Typography component="p">{villager.sign}</Typography>
                  {/* <Typography color="textSecondary" component="p">{villager.nh_details.fav_styles}</Typography> */}
                  {/* <Typography color="textSecondary" component="p">{villager.nh_details.fav_colors}</Typography> */}
                  {/* <Typography color="textSecondary" component="p">{villager.nh_details.hobby}</Typography> */}
                </CardContent>

              </CardActionArea>

            </Card>
          );
        })
        : ""}
    </>
  );
}
