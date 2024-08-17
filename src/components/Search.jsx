import React, { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "a39e9dcfbe8c482ab6bd67c0fc593567";

function Search({ setFoodData }) {
  // Destructure setFoodData from props
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      try {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        setFoodData(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchFood();
  }, [query, setFoodData]); // Include setFoodData in the dependency array

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}

export default Search;
