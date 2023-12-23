import React, { useEffect, useState } from "react";
import ShowCase from "./ShowCase";
import Collections from "./Assets/new_collections";
import FilterDropdown from "./FilterDropdown";

const NewCollections = () => {
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
    <div id="newCollections">
      <ShowCase title={"New Collections"} items={filteredCollections}>
        <FilterDropdown onFilterChange={handleFilterChange} />
      </ShowCase>
    </div>
  );
};

export default NewCollections;
