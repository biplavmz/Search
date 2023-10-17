import { useState } from "react";
import data from "../data";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filterData = data.filter((item) =>
      item.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(filterData);
  };

  return (
    <>
      <input
        placeholder="Search"
        value={searchTerm}
        type="text"
        onChange={handleSearch}
      />
      <ul>
        {searchResult.map((item) => (
          <li key={item.id}>{item.model}</li>
        ))}
      </ul>
    </>
  );
}
