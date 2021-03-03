import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "../../pages/pages.css"

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    bottom: '0px',
    left: '25px',
    right: '0px',
    top: '30px',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100px',
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer id="bg-gradient" className={classes.footer}>
        <Container maxWidth="md">
          <Typography id="footer" variant="body1">&copy; 2021 | Made with ❤️️ by | <a href="https://github.com/MichelleMcConville/MichelleMcConville.github.io" target="_blank">Michelle McConville</a> | <a href="https://gregstead.github.io/" target="_blank">Greg Stead</a> | <a href="https://kjhallam.github.io/" target="_blank">Kendra Hallam</a></Typography>
        </Container>
      </footer>
    </div>
  );
}