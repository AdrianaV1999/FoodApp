import React from "react";
import Item from "./Item";

function ItemList({ food, isLoading }) {
  if (isLoading) {
    return <p>Loading</p>;
  }

  if (!food || !food.extendedIngredients) {
    return <p>No ingredients available</p>;
  }

  return (
    <div>
      {food.extendedIngredients.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
}

export default ItemList;
