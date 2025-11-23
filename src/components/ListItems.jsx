import Item from "./Item";

export default function ListItems({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>isLoading</p>
      ) : (
        food.extendedIngredients.map((item) => <Item item={item} />)
      )}
    </div>
  );
}
