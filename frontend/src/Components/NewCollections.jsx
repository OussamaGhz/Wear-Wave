import React, { useContext, useEffect, useRef, useState } from "react";
import ShowCase from "./ShowCase";
import Collections from "./Assets/new_collections";
import FilterDropdown from "./FilterDropdown";
import { shopContext } from "../Context/ShopContext";

const NewCollections = () => {
  const collecionRef = useRef(null);
  const ctx = useContext(shopContext);
  ctx.refs.newCollectionsRef = collecionRef;
  const [filteredCollections, setFilteredCollections] = useState(Collections);

  const handleFilterChange = (filter) => {
    if (filter === "all") {
      setFilteredCollections(Collections);
    } else {
      const filtered = Collections.filter((item) => item.category === filter);
      setFilteredCollections(filtered);
    }
  };

  return (
    <div id="newCollections" ref={collecionRef}>
      <ShowCase title={"New Collections"} items={filteredCollections}>
        <FilterDropdown onFilterChange={handleFilterChange} />
      </ShowCase>
    </div>
  );
};

export default NewCollections;
