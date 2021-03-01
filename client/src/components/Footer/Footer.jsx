import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
//import Link from '@material-ui/core/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    // backgroundColor:
    //   theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <footer className={classes.footer} style={{ backgroundImage: "linear-gradient(30DEG, #017c74, #7cc9c3, #ef785a, #febdc3, #f5c24c, #fcea64)", height: "55px" }}>
        <Container maxWidth="md">
          <Typography variant="body1" style={{textAlign: "center", fontSize: "14px", fontFamily: "Quicksand"}}>&copy; 2021 | Made with ❤️️ by | Michelle McConville | Greg Stead | Kendra Hallam</Typography>
        </Container>
      </footer>
    </div>
  );
}