import React, { useState, createRef } from "react";

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardHeader,
  Col,
} from "reactstrap";

import ColorThief from "colorthief";

import { Fade } from "react-reveal";

const ExperienceCard = ({ data }) => {
  const [colorArrays, setColorArrays] = useState([]);
  console.log(colorArrays);
  const imgRef = createRef();
  console.log(colorArrays)



  return (
    <Col lg="4">
      <Fade left duration={1000} distance="40px">
        <Card
          style={{ flex: 1 }}
          className="shadow-lg--hover shadow border-0 text-center rounded"
        >
          <CardHeader style={{ background: "#333" }}>
            <h5 className="text-white">{data.company}</h5>
          </CardHeader>
          <CardBody className="py-5">
            <img
              ref={imgRef}
              className=" bg-white rounded-circle mb-3 img-center img-fluid shadow-lg "
              top
              src={data.companylogo}
              style={{ width: "100px" }}
    
              alt=""
            />
            <CardTitle tag="h5">{data.role}</CardTitle>
            <CardSubtitle>{data.date}</CardSubtitle>
            <CardText className="description my-3 text-left">
              {data.desc}
              <ul>
                {data.descBullets
                  ? data.descBullets.map((desc,i) => {
                      return <li key={desc + i + ''}>{desc}</li>;
                    })
                  : null}
              </ul>
            </CardText>
            <div></div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
