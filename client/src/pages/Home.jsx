import React from 'react';
import { Box, Button, Container, Typography, withStyles } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '../components/Card/HomeCard'
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
      <Box style={{ fontSize: "50px", height: "50px", marginBottom: "15px", textAlign: "center" }}>Home</Box>

      <Container maxWidth='lg' style={{ display: "flex", flexDirection: 'row'}}>

        <Box style={{ border: "solid", borderRadius: "30px", margin: "auto", marginBottom: "25px", width: "25%"  }}>
          <Card id="page-cards" />
          {/* <Card id="page-cards" /> */}
          {/* <Card id="page-cards" /> */}
        </Box>
        <Box style={{ border: "solid", borderRadius: "30px", margin: "auto", marginBottom: "25px", width: "25%" }}>
          <Card style={{ display: "inline" }} />
        </Box>
        <Box style={{ border: "solid", borderRadius: "30px", margin: "auto", marginBottom: "25px", width: "25%" }}>
          <Card style={{ display: "inline" }} />
        </Box>

      </Container>

      <Container maxWidth='lg'>

      <Box style={{ fontSize: "50px", height: "50px", marginBottom: "15px", textAlign: "center" }}>List of Cool Apps</Box>

        <Accordion square expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Nookazon</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ width: "100%" }}>
              ACNH Auction House. Trade, Review & Wishlist Items too!
              <Button size="small" variant="contained" style={{ float: "right" }}>link to https://nookazon.com/ here</Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion square expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
            <Typography>ACNH Calendar</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ width: "100%" }}>
              ANCH Handy Dandy Calendar & Companion Guide!
              <Button size="small" variant="contained" style={{ float: "right" }}>link to https://www.future-press.com/acnh/ here</Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion square expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Nook Plaza</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ width: "100%" }}>
              Encyclopedia of every items in the game.
              <Button size="small" variant="contained" style={{ float: "right" }}>link to https://nookplaza.net/ here</Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

      </Container>
    </div>
  );
}
