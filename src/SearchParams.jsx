const SearchParams = () => {
  const location = "Seattle,WA";
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
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
