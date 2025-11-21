import styles from "./fooditem.module.css";
export default function FooItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} />
      <div className={styles.itemContent}>
        <h3 className={styles.itemName}> {food.title} </h3>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => setFoodId(food.id)}
            className={styles.itemButton}
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
