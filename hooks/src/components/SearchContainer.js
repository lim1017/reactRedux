import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchContainer = (props) => {
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });

      setSearchResults(response.data.query.search);
      console.log(searchResults);
    };

   const timeoutID = setTimeout(()=>{
      if (term) {
        search();
      }
    },500)

    return () => {
      clearTimeout(timeoutID)
    }

  }, [term]);

  const renderSearchResults = searchResults.map((result, index) => {
    return (
      <div className="item" key={index}>
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            {" "}
            Link
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          ></input>
        </div>
      </div>

      <div className="ui celled list">{renderSearchResults}</div>
      {/* {searchResults.length ? {renderSearchResults} : null} */}
    </div>
  );
};

export default SearchContainer;
