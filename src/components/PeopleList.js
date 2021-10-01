
import React, { Component } from "react";
import people from "./data.js";
import People from "./People";

export default class PeopleList extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      people: people,
      counter: 0,
    };
  }

  cyclePeopleNext() {
    if (this.state.counter < people.length){
      this.setState({
        counter: this.state.counter + 1 ,
      });
    } else if(this.state.counter > 25){
      this.setState({
        counter: 25 
      })
    }
  }

  cyclePeoplePrevious() {

    if(this.state.counter < 1){
      this.setState({
        counter:0
      });
    } else { 
      this.setState({
        counter:this.state.counter - 1
      });
    }   // this.setState({
    //   counter: this.state.counter - 1,
    // });
  }

  render() {
    const mappedPeople = this.state.people.map((element) => {
      return <People people={element} key={element.id} />;
    });
    return (
      <div>
        <h1 className="dark-text1">Home</h1>

        {mappedPeople[this.state.counter]}
        <div className="inButtons">
          <p className="dark-text">
            {this.state.counter + 1}/{mappedPeople.length}
          </p>
          <button className="previousBtn"onClick={() => this.cyclePeoplePrevious()}>previous</button>
          <button className="nextBtn" onClick={() => this.cyclePeopleNext()}>next</button>
          <button className="deleteBtn">Delete</button>
        </div>
      </div>
    );
  }
}