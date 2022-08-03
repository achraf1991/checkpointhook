import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardImg, CardBody, CardText } from "reactstrap";

import Rate from "./Rate";

const MovieCard = ({ movie: { title, posterUrl, description, rate } }) => {
  return (
    <div className="film">
      <Card
        style={{ height: `550px`, width: "300px", backgroundColor: "white" }}
      >
        <CardTitle>
          <div className=" row justify-content-center ">
            <h6>{title}</h6>
          </div>
        </CardTitle>
        <CardImg
          style={{ height: `300px`, width: "300px" }}
          src={posterUrl}
          alt="Card image cap"
        />
        <CardBody>
          <div className="">
            <CardText>{description}</CardText>
          </div>
          <div className="">
            <Rate rating={rate} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
