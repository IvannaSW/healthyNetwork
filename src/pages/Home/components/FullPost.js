import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Post from "../../../components/Post";
import { fetchPostData, setPostData } from "../../../store/post/actions";
import {
  selectIsPostLoading,
  selectPostData,
} from "../../../store/post/selectors";
import { useHomeStyles } from "../theme";

export const FullPost = () => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const postData = useSelector(selectPostData);
  const isLoading = useSelector(selectIsPostLoading);
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    if (id) {
      dispatch(fetchPostData(id));
    }

    return () => {
      dispatch(setPostData(undefined));
    };
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className={classes.postsCentred}>
        <CircularProgress />
      </div>
    );
  }

  if (postData) {
    return <Post classes={classes} {...postData} />;
  }

  return null;
};
