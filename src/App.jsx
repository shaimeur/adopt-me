import { createRoot } from "react-dom";
import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Arcanine",
//       animal: "Ino",
//       breed: "Legendary",
//     }),
//     React.createElement(Pet, {
//       name: "Snorlax",
//       animal: "Kuma",
//       breed: "Legendary",
//     }),
//     React.createElement(Pet, {
//       name: "Pikachu",
//       animal: "souri",
//       breed: "Shiny",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name={"Arcanine"} animal={"Ino"} breed={"Legendary"} />
      <Pet name={"Snorlax"} animal={"Kuma"} breed={"Legendary"} />
      <Pet name={"Pikachu"} animal={"souri"} breed={"Shiny"} />
    </div>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
// root.render(React.createElement(App));
root.render(<App />);
