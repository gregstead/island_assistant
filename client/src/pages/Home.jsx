import React from 'react';
import { Box, Button, Container, Typography, withStyles } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../index.css"
import { Link } from 'react-router-dom'

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
      <Box id="page-header">Home</Box>

      <Container id="container-style" maxWidth='md' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>

        <Link id="link" to='/flowers'>
          <Box id="home-card">
            <Typography id="home-text" component="h2" variant="h5">Flowers</Typography>
          </Box>
        </Link>
        
        <Link id="link" to='/items'>
          <Box id="home-card">
            <Typography id="home-text" component="h2" variant="h5">Swap or Drop</Typography>
          </Box>
        </Link>

        <Link id="link" to='/villagers'>
          <Box id="home-card">
            <Typography id="home-text" component="h2" variant="h5">Villager</Typography>
          </Box>
        </Link>

      </Container>

      <Container maxWidth='md'>

      <Box id="page-header">List of Cool Apps</Box>

        {/* Accordion #1 */}
        <Accordion id="acc-panel1" expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Nookazon</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography id="acc-details">
              ACNH Auction House. Trade, Review & Wishlist Items too!
              <Button size="small" variant="contained" id="acc-btn"><a target="_blank" href="https://nookazon.com/">Nookazon Auction</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #2 */}
        <Accordion id="acc-panel2" expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3d-content" id="panel3d-header">
            <Typography>ACNH Calendar</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography id="acc-details">
              ANCH Handy Dandy Calendar & Companion Guide!
              <Button size="small" variant="contained" id="acc-btn"><a target="_blank" href="https://www.future-press.com/acnh/">Online Calendar</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #3 */}
        <Accordion id="acc-panel3" expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Nook Plaza</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography id="acc-details">
              Encyclopedia of all the items in the game.
              <Button size="small" variant="contained" id="acc-btn"><a target="_blank" href="https://nookplaza.net/">Nook Plaza</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #4 */}
        <Accordion id="acc-panel4" expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography>VillagerDB News</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography id="acc-details">
              Get the latest ACNH News
              <Button size="small" variant="contained" id="acc-btn"><a target="_blank" href="https://villagerdb.com/cms/news">News</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #5 */}
        <Accordion id="acc-panel5" expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Nooks Guide</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography id="acc-details">
              Another all inclusive app for ACNH!
              <Button size="small" variant="contained" id="acc-btn"><a target="_blank" href="https://nooksguide.com/">Nooks Guide</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #6 */}
        <Accordion id="acc-panel6" expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Completionista</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography id="acc-details">
              Easily keep track of all your ACNH stuff in fully featured boards!
              <Button size="small" variant="contained" id="acc-btn"><a target="_blank" href="https://completionista.com/">Completionista</a></Button>
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Accordion #7 */}
        <Accordion id="acc-panel7" expanded={expanded === "panel7"} onChange={handleChange("panel7")}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Nook Center</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography id="acc-details">
              Happy Villager Tracking!
              <Button size="small" variant="contained" id="acc-btn"><a target="_blank" href="https://nook.center/en-us">Nook Center</a></Button>
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