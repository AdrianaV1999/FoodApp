import React, { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "a39e9dcfbe8c482ab6bd67c0fc593567";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      {" "}
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>{food.readyInMinutes} Mins</strong>
          </span>
          <span>
            <strong>Serves {food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegeterian ? "vegeteraian" : "none veg"} </strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>{food.pricePerServing / 100} $</strong>
          </span>
        </div>
        <div>
          <h2>Ingredients</h2>
          <ItemList food={food} isLoding={isLoading} />
          <h2>Instructions</h2>
          <div className={styles.recipeInstructions}>
            <ol></ol>
            {isLoading ? (
              <p>Loading..</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
