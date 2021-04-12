import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./projects.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function Projects() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {/* <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card> */}

      <div style={{ textAlign: "center" }}>
        <h2>Projects</h2>
        <p>Some projects that I have done recently.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="column-66">
            <h1 className="xlarge-font">
              <b>The App</b>
            </h1>
            <h1 className="large-font" style={{ color: "MediumSeaGreen" }}>
              <b>Eventiny TN</b>
            </h1>
            <p>
              <span>
                Platform that allows users to participate in events, to be
                upgraded to an event planner and to achieve online payment.
              </span>
              <br />
              <span>Team project</span>
              <br />
              Tasks: Social login with google, login with JWT Athentication,
              comment’s section, Landing page, Full part of Admin side, Event
              history, list of events.{""}
              <br />
              Technologies: Scrum methodology, Vue3, Sementic ui, Axios,
              Bootstrap, cloudinary, NestJs, TypeOrm, NodeMailer, Express.js,
              JWT, google-OAuth-Passport, Passport.js, bcrypt.js, google-map
              API, konnect API, Mysql, Digital oceans, Git Workflow.
            </p>
            <button className="button">Go To Github Repo</button>
          </div>
          <div className="column-33">
            <img
              src="https://images.pexels.com/photos/3158136/pexels-photo-3158136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              width="335"
              height="471"
            />
          </div>
        </div>
      </div>

      <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
        <div className="row">
          <div className="column-33">
            <img
              src="https://images.pexels.com/photos/3158136/pexels-photo-3158136.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="App"
              width="335"
              height="471"
            />
          </div>
          <div className="column-66">
            <h1 className="xlarge-font">
              <b>Catwalk</b>
            </h1>
            <h1 className="large-font">
              <b>One Detail Page of Amazon</b>
            </h1>
            <p>
              • Team Project
              <br />• Scrum Master
              <br />• TECHNOLOGIES Javascript HTML CSS.
              <br />• Allows users to see the details of the product, overview
              service, related product service, Questions and answers service,
              Rating and reviews service.
              <br />• Tasks: Created the Questions and Answers service
              <br />• Technologies:Agile methodology, Service Oriented
              Architecture React, Redux, Hooks, Sementic ui, Axios, Bootstrap,
              cloudinary, Node.js, Express, Proxy, HACK REACTOR API, Digital
              oceans, Git Workflow.
            </p>
            <button className="button">Check the Code on Github</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="column-66">
            <h1 className="xlarge-font">
              <b>Still more Apps</b>
            </h1>
            <h1 className="large-font">
              <b>RBK Blogs</b>
            </h1>
            <p>
              • Team Project
              <br />
              • Scrum Master
              <br />
              • Platform that allows student to post and share their blogs.
              <br />
              • Tasks: feed of blogs, profiles, JWT Athentication.
              <br />• Technologies: React, Sementic ui, Axios, Bootstrap,
              cloudinary, Node.js, Express,JWT Auth, Git Workflow.
            </p>
            <button className="button">Repo on Github</button>
          </div>
          <div className="column-33">
            <img
              src="https://images.pexels.com/photos/4503734/pexels-photo-4503734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              width="335"
              height="471"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
