import React from "react";
import classNames from "classnames";
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepostIcon from "@material-ui/icons/RepeatOutlined";
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShareIcon from "@material-ui/icons/ReplyOutlined";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import { Avatar, Grid, IconButton, Paper, Typography } from "@material-ui/core";

const Post = ({ _id, text, user, classes }) => {
  return (
    <Link className={classes.postWrapper} to={`/home/post/${_id}`}>
      <Paper
        className={classNames(classes.post, classes.postsHeader)}
        variant="outlined"
      >
        <Grid container spacing={3}>
          <Grid item xs={1}>
            <Avatar
              className={classes.postAvatar}
              alt={`Profile Image ${user.fullname}`}
              src={user.avatarUrl}
            />
          </Grid>
          <Grid item xs={11}>
            <Typography>
              <b>{user.fullname}</b>&nbsp;
              <span className={classes.postUserName}>@{user.username}</span>
              &nbsp;
              <span className={classes.postUserName}>·</span>&nbsp;
              <span className={classes.postUserName}>1 h</span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              {text}
            </Typography>
            <div className={classes.postFooter}>
              <div>
                <IconButton>
                  <CommentIcon style={{ fontSize: 20 }} />
                </IconButton>
                <span>1</span>
              </div>
              <div>
                <IconButton>
                  <RepostIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <LikeIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <ShareIcon style={{ fontSize: 20 }} />
                </IconButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Link>
  );
};

export default Post;

Post.propTypes = {
  _id: PropTypes.string,
  text: PropTypes.string,
  classes: PropTypes.object,
  user: PropTypes.shape({
    fullname: PropTypes.string,
    username: PropTypes.string,
    avatarUrl: PropTypes.string,
  }),
};
