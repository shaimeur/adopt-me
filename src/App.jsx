import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Arcanine",
      animal: "Ino",
      breed: "Legendary",
    }),
    React.createElement(Pet, {
      name: "Snorlax",
      animal: "Kuma",
      breed: "Legendary",
    }),
    React.createElement(Pet, {
      name: "Pikachu",
      animal: "souri",
      breed: "Shiny",
    }),
  ]);
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
