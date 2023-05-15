const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {},
    [
       React.createElement("h1", {}, "Adopt Me!"),
       React.createElement(Pet,{
        name : "Arcanine",
        animal : "Dog",
        breed : "Legendary"
       }),
       React.createElement(Pet,{
        name : "Snorlax",
        animal : "Dog",
        breed : "Legendary"
       }),
       React.createElement(Pet,{
        name : "Pikachu",
        animal : "Dog",
        breed : "Legendary"
       }),
    ]
);
};
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
