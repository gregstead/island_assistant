import React, { useState, useEffect } from "react";
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import SearchVillager from "../components/Search/SearchVillager";
import API from "../utils/API";

const useStyles = makeStyles({
  root: { maxWidth: 690 },
  media: { height: 300 },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const [search, setSearch] = useState("");
  const [villagers, setVillagers] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleClick = (e) => {
    API.getVillagerNames(search).then((results) => {
      setVillagers(results.data);
    });
  };

  useEffect(() => {
    API.getVillagerNames("Merengue").then((results) => {
      console.log(search, results.data);
      setVillagers(results.data);
    });
  }, []);

  function favColors(villager) {
    if (villager.nh_details) {
      return (
        <Typography id="villager-text" component="p">FavColors:
          {villager.nh_details.fav_colors.join(", ")}
        </Typography>
      );
    }
  }

  function favStyles(villager) {
    if (villager.nh_details) {
      return (
        <Typography id="villager-text" component="p">FavStyles:
          {villager.nh_details.fav_styles.join(", ")}
        </Typography>
      );
    }
  }

  function hobby(villager) {
    if (villager.nh_details) {
      return (
        <Typography id="villager-text" component="p">Hobby:
          {villager.nh_details.hobby}
        </Typography>
      );
    }
  }

  return (
    <>
      <SearchVillager search={search} handleClick={handleClick} handleInputChange={handleInputChange} />

      {villagers.length > 0
        ? villagers.map((villager) => {
            return (
              <Card id="card-background" key={villager.id} className={classes.root}>
                <CardActionArea>
                  <Typography id="villager-card" component="h2" gutterBottom variant="h4">{villager.name}</Typography>

                  <CardMedia id="villager-img" className={classes.media} image={villager.image_url} title="Contemplative Reptile" />

                  <CardContent>
                    <Typography id="villager-text" component="p">Species: {villager.species}</Typography>
                    <Typography id="villager-text" component="p">Birthday: {villager.birthday_month} {villager.birthday_day}</Typography>
                    <Typography id="villager-text" component="p">Personality: {villager.personality}</Typography>
                    <Typography id="villager-text" component="p">Zodiac Sign: {villager.sign}</Typography>
                    {favColors(villager)}
                    {favStyles(villager)}
                    {hobby(villager)}

                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })
        : ""}
    </>
  );
}
