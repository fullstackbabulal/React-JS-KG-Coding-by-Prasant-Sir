import { Items } from "./Items";
export let FoodList = ({ItemList}) => (
  <ul className="list-group">
  {ItemList.map((Item)=>(
    <Items key={Item} FoodName={Item}></Items>
  ))};
  
  </ul>
);