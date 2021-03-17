import React, { useState } from "react";
import classNames from "classnames";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import { PropTypes } from "prop-types";

const AddPostForm = ({ classes, maxRows }) => {
  const [text, setText] = useState("");
  const MAX_LENGTH = 280;
  const textLimitPercent = Math.round((text.length / MAX_LENGTH) * 100);
  const textCount = MAX_LENGTH - text.length;
  const handleChangeTextArea = (e) => {
    setText(e.target.value);
  };
  const handleSubmitPost = () => {
    setText("");
  };
  return (
    <div>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.postAvatar}
          alt={`UserAvatar`}
          src={
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          }
        />
        <TextareaAutosize
          className={classes.addFormTextarea}
          placeholder="What's up?"
          value={text}
          onChange={handleChangeTextArea}
          rowsMax={maxRows}
        />
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(
            classes.postFooter,
            classes.addFormBottomActions
          )}
        >
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={
                    text.length >= MAX_LENGTH ? { color: "red" } : undefined
                  }
                />
                <CircularProgress
                  style={{ color: "rgba(0, 0, 0, 0.1)" }}
                  variant="determinate"
                  size={20}
                  thickness={5}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmitPost}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddPostForm;

AddPostForm.propTypes = {
  classes: PropTypes.object,
  maxRows: PropTypes.number,
};
