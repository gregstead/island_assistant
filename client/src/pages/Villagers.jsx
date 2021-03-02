import React, { useState, useEffect } from "react";
import { Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
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

  useEffect(() => {
    API.getVillagerNames("Merengue").then((results) => {
      console.log(search, results.data);
      setVillager(results.data);
    });
  }, []);

  const handleClick = (e) => {
    API.getVillagerNames(search).then((results) => {
      console.log(search, results.data);
      setVillager(results.data);
    });
  };

  return (
    <>
      <SearchVillager 
        search={search} 
        handleClick={handleClick} 
        handleInputChange={handleInputChange}
      />

      {villager.length > 0 ? villager.map((villager, i) => {

        return (
          <Card id="card-background" key={i} className={classes.root} >
            
            <CardActionArea>
              <Typography 
                id="villager-card"
                component="h2" 
                gutterBottom variant="h4">
                  {villager.name}
              </Typography>

              <CardMedia
                id="villager-img"
                className={ classes.media}
                image= {villager.image_url}
                title="Contemplative Reptile"
              />

              <CardContent>
                <Typography id="villager-text" component="p">{villager.species}</Typography>
                <Typography id="villager-text" component="p">{villager.birthday_month} {villager.birthday_day}</Typography>
                <Typography id="villager-text" component="p">{villager.personality}</Typography>
                <Typography id="villager-text" component="p">{villager.sign}</Typography>
                {/* <Typography id="villager-text" component="p">{villager.nh_details.fav_styles}</Typography> */}
                {/* <Typography id="villager-text" component="p">{villager.nh_details.fav_colors}</Typography> */}
                {/* <Typography id="villager-text" component="p">{villager.nh_details.hobby}</Typography> */}
              </CardContent>

            </CardActionArea>

          </Card>
        );
      })
      : ""}
    </>
  );
}
