import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/SupervisorAccount";
import HeartIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    height: "100vh",
  },
  infoContainer: {
    backgroundColor: "#99e4ee",
    flex: "0 0 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
  },
  infoBigIcon: {
    position: "absolute",
    left: "40%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "230%",
    height: "165%",
  },
  infoList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    "& h6": {
      color: "#fff",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      fontSize: 18,
    },
    width: 380,
    position: "relative",
  },
  infoIcon: {
    fontSize: 20,
    marginRight: 15,
  },
  loginContainer: {
    flex: "0 0 50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginWrapper: {
    width: 380,
  },
  loginTitle: {
    fontWeight: 600,
    fontSize: 22,
    marginBottom: 45,
    marginTop: 20,
  },
  logoIcon: {
    fontSize: 50,
  },
}));

function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.infoContainer}>
        <LocalFloristIcon color="primary" className={classes.infoBigIcon} />
        <ul className={classes.infoList}>
          <li>
            <Typography variant="h6">
              <SearchIcon className={classes.infoIcon} />
              The most interesting news about health
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <PeopleIcon className={classes.infoIcon} />
              Global community
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <HeartIcon className={classes.infoIcon} />
              Enjoy your life
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginContainer}>
        <div className={classes.loginWrapper}>
          <LocalFloristIcon color="primary" className={classes.logoIcon} />
          <Typography className={classes.loginTitle} variant="h6">
            Keep in touch with the whole world
          </Typography>
          <Typography>
            <b>Join the social network right now</b>
          </Typography>
          <Button variant="contained" color="primary">
            Sign Up
          </Button>
          <Button variant="outlined" color="primary">
            Sign In
          </Button>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
