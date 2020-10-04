import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./library.css";

class Library extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Randall Munroe",
          title: "What if? Absurd Questions",
          img: require("./../../../Components/book/What-If.png")
        },
        {
          name: "Morris Williamson",
          title: "Glyph: New look on things",
          img: require("./../../../Components/book/Glyph.png")
        },
        {
          name: "J.K. Rownling",
          title: "Harry Potter and Goblet of Fire",
          img: require("./../../../Components/book/Harry-Potter-Goblet-of-Fire.png")
        },
        {
          name: "Rachel Hartman",
          title: "Tess on the Road",
          img: require("./../../../Components/book/Tes-on-the-Road.png")
        },
        {
          name: "Randall Munroe",
          title: "What if? Absurd Questions",
          img: require("./../../../Components/book/What-If.png")
        },
        {
          name: "Morris Williamson",
          title: "Glyph: New look on things",
          img: require("./../../../Components/book/Glyph.png")
        },
        {
          name: "J.K. Rownling",
          title: "Harry Potter and Goblet of Fire",
          img: require("./../../../Components/book/Harry-Potter-Goblet-of-Fire.png")
        },
        {
          name: "Rachel Hartman",
          title: "Tess on the Road",
          img: require("./../../../Components/book/Tes-on-the-Road.png")
        }
      ]
    };
  }

  movePage(item) {
    console.log("Tittle : " + item.title);
  }

  render() {
    return (
      <div className="box-library">
        <div className="list-book">
          <h1>List Book</h1>
          <ul>
            {this.state.data.map(item => (
              <Link
                to="/detail"
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>
                  <div onClick={this.movePage.bind(this, item)}>
                    <img src={item.img} alt="book" />
                    <h5>{item.title}</h5>
                    <p>{item.name}</p>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Library;
