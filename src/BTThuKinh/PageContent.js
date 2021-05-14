import React, { Component } from "react";

export default class PageContent extends Component {
  dataGlasses = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  wearGlasses = (glasses) => {
    return (
      <img
        src={glasses.url}
        height="150px"
        width="60%"
        position="absolute"
        style={{ position: `absolute`, top: `30%`, left: `20%` }}
      />
    );
  };
  
  renderGlasses = () => {
    return this.dataGlasses.map((glasses, index) => {
      return (
        <div
          className="col-2"
          key={index}
          onClick={() => {
              console.log(glasses);
              this.wearGlasses(glasses);
          }}
        >
          <img src={glasses.url} alt={glasses.name} width="100%" />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div
            className="col-6 text-center"
            style={{
              width: `100%`,
              height: `700px`,
              backgroundImage: `url(./glassesImage/model.jpg)`,
              backgroundSize: `cover`,
            }}
          ></div>
          <div
            className="col-6 text-center"
            style={{
              width: `100%`,
              height: `700px`,
              backgroundImage: `url(./glassesImage/model.jpg)`,
              backgroundSize: `cover`,
            }}
          ></div>
          <div id="ThuKinh"></div>
          <div className="row">{this.renderGlasses()}</div>
        </div>
      </div>
    );
  }
}
