import FoodItem from "./FoodItem";

let Items = ({foodItem}) => (
  <ul className="list-group">
      {foodItem.map((item) => (
        <FoodItem key={item} foodItem={item}/>
      ))}
  </ul>
);

export default Items;