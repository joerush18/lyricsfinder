import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { withRouter } from "react-router-dom";

const Searchbox = (props) => {
  const [ArtistName, setArtistName] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.history.push({
      pathname: "/search",
      search: ArtistName,
    });
  };
  const onChangeHandler = (event) => {
    setArtistName(event.target.value);
    console.log(ArtistName);
  };

  return (
    <div className="container-fluid mt-5 ">
      <form className="form-inline offset-md-5" onSubmit={onSubmitHandler}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter artist name"
          aria-label="Search"
          onChange={onChangeHandler}
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={onSubmitHandler}
        >
          Search
        </button>
        <div></div>
      </form>
    </div>
  );
};

export default withRouter(Searchbox);
