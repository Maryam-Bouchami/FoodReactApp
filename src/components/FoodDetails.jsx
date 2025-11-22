import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "24261700e5424760b7e96ad82e404c2e";
  const [isLoading, setIsLoading] = useState(true);
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
      {foodId}

      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />

        <div className={styles.recipeDetails}>
          <span>
            <strong>⏲ {food.readyInMinutes} Minutes </strong>
          </span>
          <span>
            <strong>👨 👩 Serves: {food.serving} </strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " 💚Vegetarian" : " 🍖 Non-Vegetarian"}{" "}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " 🐮 Vegan" : ""} </strong>
          </span>
        </div>
        <span>$ {food.pricePerServing / 100} Per Serving</span>
        <h3>Instructions</h3>
        <div className={styles.recipeInstructions}>
          {isLoading ? (
            <p>isLoading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
