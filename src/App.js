import React from "react";
import "./styles.css";
import { ThemeProvider, Grid, CssBaseline } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Brightness3Icon from "@material-ui/icons/Brightness3";

import UserTable from "./components/userTable";
    
const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));


export default function App() {
  const [theme, setTheme] = React.useState(false);
  const classes = useStyles();
  const icon = !theme ? <Brightness3Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(theme ? light : dark);

  return (
    <ThemeProvider theme={appliedTheme}>
       
      <Grid container item xs={12} align="center" justify="center">
         <CssBaseline />
        <Paper>
          <div className={classes.root}>
            <Typography className={classes.title} align="left" variant="h3">
              Hello Team!
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="mode"
              onClick={() => setTheme(!theme)}
            >
              {icon}
            </IconButton>
          </div>

          <Grid item  xs={12} sm={12} md={12}>
            <UserTable></UserTable>
          </Grid>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
}

export const light = {
  palette: {
    type: "light",
  },
};
export const dark = {
  palette: {
    type: "dark",
  },
};
