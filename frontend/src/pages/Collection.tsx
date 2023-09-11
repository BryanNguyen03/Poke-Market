import React, { useState } from "react";

const Collection = () => {
  // All filters
  const [searchFilter, setSearchFilter] = useState("");
  const [sortByName, setSortByName] = useState(false);
  const [sortByRarity, setSortByRarity] = useState(false);

  return <div className="App">Your Collection</div>;
};

export default Collection;
