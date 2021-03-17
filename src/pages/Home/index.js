import React from "react";
import {
  Container,
  InputAdornment,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";

import Post from "../../components/Post";
import SideMenu from "../../components/SideMenu";
import AddPostForm from "../../components/AddPostForm";
import { useHomeStyles } from "./theme";
import SearchTextField from "../../components/SearchTextField";
import SearchIcon from "@material-ui/icons/SearchOutlined";

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
            <Paper>
              <div className={classes.addForm}>
                <AddPostForm classes={classes} />
              </div>
              <div className={classes.addFormBottomLine} />
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
          <SearchTextField
            variant="outlined"
            placeholder="Search in network"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
