import React, { useEffect } from "react";
import {
  Container,
  InputAdornment,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import Tags from "../../components/Tags";
import { Route } from "react-router-dom";
import { fetchTags } from "../../store/tags/actions";

import Post from "../../components/Post";
import SideMenu from "../../components/SideMenu";
import AddPostForm from "../../components/AddPostForm";
import { useHomeStyles } from "./theme";
import SearchTextField from "../../components/SearchTextField";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../store/posts/actions";
import {
  selectPostsItems,
  selectIsPostsLoading,
} from "../../store/posts/selectors";

import { FullPost } from "./components/FullPost";
import { BackButton } from "../../components/BackButton";

const Home = () => {
  const classes = useHomeStyles();

  const dispatch = useDispatch();
  const posts = useSelector(selectPostsItems);
  const isLoading = useSelector(selectIsPostsLoading);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.postsWrapper} variant="outlined">
            <Paper className={classes.postsHeader} variant="outlined">
              <Route path="/home/:any">
                <BackButton />
              </Route>

              <Route path={["/home", "/home/search"]} exact>
                <Typography variant="h6">Posts</Typography>
              </Route>

              <Route path="/home/post">
                <Typography variant="h6">Repost</Typography>
              </Route>
            </Paper>
            <Route path={["/home", "/home/search"]} exact>
              <Paper>
                <div className={classes.addForm}>
                  <AddPostForm classes={classes} />
                </div>
                <div className={classes.addFormBottomLine} />
              </Paper>
            </Route>

            <Route path="/home" exact>
              {isLoading ? (
                <div className={classes.tweetsCentred}>
                  <CircularProgress />
                </div>
              ) : (
                posts.map((post) => (
                  <Post key={post._id} classes={classes} {...post} />
                ))
              )}
            </Route>
            <Route path="/home/post/:id" component={FullPost} exact />
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
          <Tags classes={classes} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
