import React from 'react';
import { Box, Button, Container, Typography, withStyles } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Card from '../components/Card/HomeCard'
import "../index.css"

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Box style={{ fontFamily: "FinkHeavy", fontSize: "50px", height: "50px", marginBottom: "30px", marginTop: "90px", textAlign: "center" }}>Home</Box>

      <Container maxWidth='md' style={{ display: "flex", flexDirection: 'row'}}>

        <Box style={{ backgroundColor: "#fff9e5", border: "solid #786951", borderRadius: "20px", padding: "10px", margin: "auto", marginBottom: "25px", marginWidth: "25%"  }}>
          <Typography component="h2" variant="h5" style={{ textAlign: "center" }}>Flowers</Typography>
          <Typography component="p" variant="body2" style={{ textAlign: "center" }}></Typography>< br/>
          <Button size="small" style={{ justifyContent: "center" }}>click me for flower breeding info</Button>
        </Box>
        
        <Box style={{ backgroundColor: "#fff9e5", border: "solid #786951", borderRadius: "20px", padding: "10px", margin: "auto", marginBottom: "25px", marginWidth: "25%"  }}>
          <Typography component="h2" variant="h5" style={{ textAlign: "center" }}>Swap or Drop</Typography>
          <Typography component="p" variant="body2" style={{ textAlign: "center" }}></Typography>< br/>
          <Button size="small" style={{ justifyContent: "center" }}>click me for comparing items</Button>
        </Box>

        <Box style={{ backgroundColor: "#fff9e5", border: "solid #786951", borderRadius: "20px", padding: "10px", margin: "auto", marginBottom: "25px", marginWidth: "25%"  }}>
          <Typography component="h2" variant="h5" style={{ textAlign: "center" }}>Villager</Typography>
          <Typography component="p" variant="body2" style={{ textAlign: "center" }}></Typography>< br/>
          <Button size="small" style={{ justifyContent: "center" }}>click me to get info on a villager</Button>
        </Box>

      </Container>

      <Container maxWidth='md'>

      <Box style={{ fontFamily: "FinkHeavy", fontSize: "50px", height: "50px", marginBottom: "30px", marginTop: "50px", textAlign: "center" }}>List of Cool Apps</Box>

        {/* Accordion #1 */}
        <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")} style={{ backgroundColor: "#febdc3", borderTopLeftRadius: "20px", borderTopRightRadius: "20px"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Nookazon</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography style={{ width: "100%" }}>
              ACNH Auction House. Trade, Review & Wishlist Items too!
              <Button size="small" variant="contained" style={{ float: "right" }}><a target="_blank" href="https://nookazon.com/">Nookazon Auction</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #2 */}
        <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")} style={{ backgroundColor: "#ef758a" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
            <Typography>ACNH Calendar</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography style={{ width: "100%" }}>
              ANCH Handy Dandy Calendar & Companion Guide!
              <Button size="small" variant="contained" style={{ float: "right" }}><a target="_blank" href="https://www.future-press.com/acnh/">Online Calendar</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #4 */}
        <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")} style={{ backgroundColor: "#ff7c69" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Nook Plaza</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography style={{ width: "100%" }}>
              Encyclopedia of all the items in the game.
              <Button size="small" variant="contained" style={{ float: "right" }}><a target="_blank" href="https://nookplaza.net/">Nook Plaza</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #4 */}
        <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")} style={{ backgroundColor: "#f8eebc" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography>VillagerDB News</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography style={{ width: "100%" }}>
              Get the latest ACNH News
              <Button size="small" variant="contained" style={{ float: "right" }}><a target="_blank" href="https://villagerdb.com/cms/news">News</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #5 */}
        <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")} style={{ backgroundColor: "#a4d4c2" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Nooks Guide</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography style={{ width: "100%" }}>
              Another all inclusive app for ACNH!
              <Button size="small" variant="contained" style={{ float: "right" }}><a target="_blank" href="https://nooksguide.com/">Nooks Guide</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #6 */}
        <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")} style={{ backgroundColor: "#88c9a1" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Completionista</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography style={{ width: "100%" }}>
              Easily keep track of all your ACNH stuff in fully featured boards!
              <Button size="small" variant="contained" style={{ float: "right" }}><a target="_blank" href="https://completionista.com/">Completionista</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #7 */}
        <Accordion expanded={expanded === "panel7"} onChange={handleChange("panel7")} style={{ backgroundColor: "#68b893", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px"}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Nook Center</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography style={{ width: "100%" }}>
              Happy Villager Tracking!
              <Button size="small" variant="contained" style={{ float: "right" }}><a target="_blank" href="https://nook.center/en-us">Nook Center</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

      </Container>
    </div>
  );
}

// https://dodocodes.com/
// https://www.tanukiforest.com/
// https://newhorizonshq.com/
// https://acnh-flower-guide.netlify.app/