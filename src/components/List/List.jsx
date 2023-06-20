import products from "../../data/products.json";
import Card from "components/Card";
import "./List.scss";

function List({ cat, maxPrice, sort }) {
  let items = [];

  if (cat) {
    items = products.filter(
      (item) => item.category === cat && item.price <= maxPrice
    );
  } else {
    items = products.map((item) => item);
  }

  if (sort === "asc") {
    items = items.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else if (sort === "desc") {
    items = items.sort((a, b) => (b.price > a.price ? 1 : -1));
  }

  return (
    <div className="list">
      {items?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default List;
