import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

import Rate from "./Rate";

const SearchBar = ({ handle, setRating, rating }) => {
  return (
    <div className="">
      <div className="sb">
        <Input
          type="text"
          placeholder="enter the title you search..."
          onChange={handle}
        />
      </div>
      <div className="sb">
        <Rate className="star-rating" starIndex={setRating} rating={rating} />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func,
};

export default SearchBar;
