   
import React from "react";

const People = (props) => {
  return (
    <div className="textContainer">
      <div className="person-text">
        <h6 className="person-name">
          {props.people.name.first} {props.people.name.last}
        </h6>
        <ul className="list-text list-name">
          <li>
            From: {props.people.city}, {props.people.country}
          </li>
          <li>Job Title: {props.people.title}</li>
          <li>Employer: {props.people.employer}</li>
        </ul>
      </div>

      <div className="movies">
        <h6>Favorite Movies: </h6>
        <ol className="list-text">
          <li>{props.people.favoriteMovies[0]}</li>
          <li>{props.people.favoriteMovies[1]}</li>
          <li>{props.people.favoriteMovies[2]}</li>
        </ol>
      </div>
    </div>
  );
};
export default People;