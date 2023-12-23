import React, { useState } from "react";

const FilterDropdown = ({ onFilterChange }) => {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  const filterOptions = ["all", "men", "women", "kids"];

  return (
    <div className="my-4 mx-auto flex items-center justify-center">
      <select
        value={filter}
        onChange={(e) => handleFilterChange(e.target.value)}
        className="py-3 px-5 lg:px-12 text-sm font-semibold focus:outline-non rounded-full border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        {filterOptions.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
