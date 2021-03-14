import React from "react";
import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import grey from "@material-ui/core/colors/blueGrey";

import Post from "../components/Post";
import SideMenu from "../components/SideMenu";

export const useHomeStyles = makeStyles((theme) => ({
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "10px 0",
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: 230,
  },
  sideMenuListItem: {
    cursor: "pointer",
    "&:hover": {
      "& div": {
        backgroundColor: "rgba(29, 161, 242, 0.1)",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg path": {
          fill: theme.palette.primary.main,
        },
      },
    },

    "& div": {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      padding: "0 25px 0 20px",
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: "background-color 0.1s ease-in-out",
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuPostButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
  postsWrapper: {
    borderRadius: 0,
    height: "100%",
    borderTop: "0",
    borderBottom: "0",
  },
  postsHeader: {
    borderTop: "0",
    borderLeft: "0",
    borderRight: "0",
    borderRadius: 0,
    padding: "10px 15px",
    "& h6": {
      fontWeight: 800,
    },
  },
  post: {
    cursor: "pointer",
    paddingTop: 15,
    paddingLeft: 20,
    "&:hover": {
      backgroundColor: "#eaf8fa",
    },
  },
  postAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  postFooter: {
    display: "flex",
    position: "relative",
    left: -13,
    justifyContent: "space-between",
    width: 450,
  },
  postUserName: {
    color: grey[500],
  },
}));

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#eaf8fa",
      height: 45,
      padding: 0,
    },
  })
)(InputBase);

const Home = () => {
  const classes = useHomeStyles();
  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.postsWrapper} variant="outlined">
            <Paper className={classes.postsHeader} variant="outlined">
              <Typography variant="h6">Main page</Typography>
            </Paper>
            {[
              ...new Array(5).fill(
                <Post
                  text="With 67 million people using Twitter every month, it's a tough job to get the most Twitter followers out of everyone. Competition is stiff, but these people have made it to the top of the table."
                  user={{
                    fullname: "Ivanna Savchuk",
                    username: "IvannaSW",
                    avatarUrl:
                      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                  }}
                  classes={classes}                  
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField placeholder="Search in network" fullWidth />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
