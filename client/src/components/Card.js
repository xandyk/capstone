import React, { Component, useState } from "react";
// import artData from "../artData.json";
import axios from "axios";

export default class Card extends Component {
  state = {
    allArt: undefined,
  };

  async componentDidMount() {
    const art = await axios.get("http://localhost:5000/artworks");

    this.setState({
      allArt: art.data,
    });
  }

  render() {
    // if (this.state.allArt === undefined) {
    //   return <h1>HI SANDY</h1>;
    // }
    let newCards =
      this.state.allArt &&
      this.state.allArt.map(function (art) {
        return (
          <div className="card">
            <div className="waves-effect waves-block waves-light">
              <img
                className="activator"
                height={350}
                width={350}
                src={art.images[0].sizes.small}
                alt=""
              />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {art.location.address}
                <i className="material-icons right">more_vert</i>
              </span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                {art.artists[0].title}
                <i class="material-icons right">close</i>
              </span>

              <p>{art.description.en}</p>
            </div>
          </div>
        );
      });
    return <div className="card-wrap">{newCards}</div>;
  }
}
