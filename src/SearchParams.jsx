import { useState } from "react";
const SearchParams = () => {
  const [location, setLocation] = useState("");
  //   const location = "Seattle,WA";
  const inputWatcher = (e) => {
    console.log("==>", e.target.value);
    setLocation(e.target.value);
  };
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          {console.log("I just re-rendered!")}
          <input
            type="text"
            id="location"
            placeholder="Location..."
            value={location}
            onChange={inputWatcher}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
