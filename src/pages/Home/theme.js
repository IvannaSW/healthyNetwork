import { makeStyles } from "@material-ui/core";
import grey from "@material-ui/core/colors/blueGrey";

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
    position: "sticky",
    top: 0,
    listStyle: "none",
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },
  postsCentred: {
    marginTop: 50,
    textAlign: "center",
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
    display: "flex",
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
    maxWidth: 450,
  },
  postUserName: {
    color: grey[500],
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: "flex",
    width: "100%",
  },
  addFormBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: "100%",
    border: 0,
    fontSize: 20,
    outline: "none",
    fontFamily: "inherit",
    resize: "none",
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: "#E6ECF0",
  },
  addFormCircleProgress: {
    position: "relative",
    width: 20,
    height: 20,
    margin: "0 10px",
    "& .MuiCircularProgress-root": {
      position: "absolute",
    },
  },
  addFormBottomRight: {
    display: "flex",
    alignItems: "center",
  },
  rightSide: {
    paddingTop: 20,
    position: "sticky",
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: "#F5F8FA",
    borderRadius: 15,
    marginTop: 20,
    "& .MuiList-root": {
      paddingTop: 0,
    },
  },
}));
