import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { red } from "@material-ui/core/colors";

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
