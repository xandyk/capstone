import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artWorkData: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/artworks").then(res => {
      res.data.map(data => {
        this.state.artWorkData.push({
          artist: data.artists[0].title,
          title: data.title,
          img: data.images[0].url,
          description: data.description.en,
          latitude: data.location.lat,
          lontitude: data.location.lng,
          attribution: data.attributions[0]
        });
      });
      console.log(this.state.artWorkData);

      //   console.log(res.data);
      //   console.log(res.data[0]);
      //   console.log(res.data[0].artists[0].title);
      //   console.log(res.data[0].title);
      //   console.log(res.data[0].images[0].url);
      //   console.log(res.data[0].description.en);
      //   console.log(res.data[0].location.lat);
      //   console.log(res.data[0].location.lng);
      //   console.log(res.data[0].attributions[0]);
    });
  }
  render() {
    return <div>p</div>;
  }
}
