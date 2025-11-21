import FooItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <>
      {foodData.map((food) => (
        <FooItem setFoodId={setFoodId} food={food} key={food.id} />
      ))}
    </>
  );
}
