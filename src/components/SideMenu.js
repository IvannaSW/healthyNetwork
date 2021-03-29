import React, { useState } from "react";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import SearchIcon from "@material-ui/icons/Search";
import NotificationIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MessageIcon from "@material-ui/icons/EmailOutlined";
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListIcon from "@material-ui/icons/ListAltOutlined";
import UserIcon from "@material-ui/icons/PermIdentityOutlined";
import { Button, IconButton, Typography, Hidden } from "@material-ui/core";
import { PropTypes } from "prop-types";
import { ModalPopUp } from "../components/ModalPopUp";
import AddPostForm from "../components/AddPostForm";
import { Link } from "react-router-dom";

const SideMenu = ({ classes }) => {
  const [visibleAddPost, setVisibleAddPost] = useState(false);

  const handleClickAddPost = () => setVisibleAddPost(true);

  const onCloseAddPost = () => setVisibleAddPost(false);

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to="/home">
          <IconButton className={classes.logo} aria-label="" color="primary">
            <LocalFloristIcon className={classes.logoIcon} />
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Search
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Notification
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Messages
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Bookmark
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              List
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Profile
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          className={classes.sideMenuPostButton}
          onClick={handleClickAddPost}
          variant="contained"
          color="primary"
          fullWidth
        >
          Post
        </Button>
        <ModalPopUp onClose={onCloseAddPost} visible={visibleAddPost}>
          <div style={{ width: 550 }}>
            <AddPostForm maxRows={15} classes={classes} />
          </div>
        </ModalPopUp>
      </li>
    </ul>
  );
};

export default SideMenu;

SideMenu.propTypes = {
  classes: PropTypes.object,
};
