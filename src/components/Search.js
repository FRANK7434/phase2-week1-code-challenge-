import React from "react";

function Search({searchFunction}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={searchFunction}
      />
      <i className="circular search link icon"></i>
      
    </div>
  );
}

export default Search;
