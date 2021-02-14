import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 500
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link className="nav-link" to="/map">
        <h6 className="button">Map</h6>
      </Link>
      <Link className="nav-link" to="/gallery">
        <h6 className="button">Gallery</h6>
      </Link>
      <Link className="nav-link" to="/about">
        <h6 className="button">About</h6>
      </Link>
      <Link className="nav-link" to="/contact">
        <h6 className="button">Contact</h6>
      </Link>
    </BottomNavigation>
  );
}
