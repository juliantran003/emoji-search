import "./App.css";
import Line from "./components/Line";
import Search from "./components/Search";
import emoji from "./emoji.json";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [inHover, setHover] = useState(false);

  return (
    <div className="container">
      <Line
        lineStyle="line"
        searchValue={search}
        searchOnChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <Search
        contentStyle="emoji"
        content={emoji.map((elem, index) => {
          return (
            <div>
              {search === "" ? (
                <div
                  className="emoji-sub"
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => navigator.clipboard.writeText(elem.symbol)}
                >
                  <span>
                    {elem.symbol} {elem.title}
                  </span>
                  {inHover && <span>Click to copy ! </span>}
                </div>
              ) : (
                <div>
                  {elem.keywords.search(search) !== -1 ? (
                    <div
                      className="emoji-sub"
                      onMouseEnter={() => setHover(true)}
                      onMouseLeave={() => setHover(false)}
                    >
                      <span>
                        {elem.symbol} {elem.title}
                      </span>
                      {inHover && <span>Click to copy !</span>}
                    </div>
                  ) : (
                    <span></span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      />
    </div>
  );
}

export default App;
