import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import pic from "../../assets/ProfilePic.jpeg";
import Dot from "../Dot/Dot";

const avatar = pic;
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(55),
    height: theme.spacing(55),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 12,
  },
}));
const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Fakhreddine Messaoudi"
        />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Fakhreddine Messaoudi"]} typeSpeed={40} />
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;