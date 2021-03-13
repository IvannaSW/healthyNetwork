import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/SupervisorAccount";
import HeartIcon from "@material-ui/icons/FavoriteBorder";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";

import { ModalPopUp } from "../components/ModalPopUp/index";

const useSignInStyles = makeStyles((theme) => ({
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
  loginTagline: {
    marginBottom: 20,
  },
  logoIcon: {
    fontSize: 50,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
  loginButton: {
    marginTop: 25,
  },
  loginButtonGroup: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function SignIn() {
  const classes = useSignInStyles();

  const [showModal, setShowModal] = useState(undefined);

  const handleSignInClick = () => {
    setShowModal("signIn");
  };

  const handleSignUpClick = () => {
    setShowModal("signUp");
  };

  const handleCloseModal = () => {
    setShowModal(undefined);
  };

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
          <Typography className={classes.loginTagline}>
            <b>Join the social network right now</b>
          </Typography>
          <div className={classes.loginButtonGroup}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSignUpClick}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSignInClick}
            >
              Sign In
            </Button>
          </div>

          <ModalPopUp
            visible={showModal === "signUp"}
            onClose={handleCloseModal}
            title="Create your account"
          >
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="Name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="name"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button variant="contained" color="primary" fullWidth>
                  Create
                </Button>
              </FormGroup>
            </FormControl>
          </ModalPopUp>
          <ModalPopUp
            visible={showModal === "signIn"}
            onClose={handleCloseModal}
            title="Login into account"
          >
            <FormControl
              className={classes.loginFormControl}
              component="fieldset"
              fullWidth
            >
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
                <Button
                  onClick={handleCloseModal}
                  variant="contained"
                  color="primary"
                  fullWidth
                  className={classes.loginButton}
                >
                  Login
                </Button>
              </FormGroup>
            </FormControl>
          </ModalPopUp>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
