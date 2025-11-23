export default function Item({ item }) {
  return (
    <div>
      <img
        src={"https://spoonacular.com/cdn/ingredients_100x100/" + item.image}
      />
      <h4>{item.name}</h4>
      <h4>
        {item.amount} {item.unit}
      </h4>
    </div>
  );
}
