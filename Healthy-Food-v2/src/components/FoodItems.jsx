import Items from "./Items";
let FoodItems = ({ItemList}) => {
  return(
    <>
    
  <ul className="list-group">
  {ItemList.map((Item)=>(
    <Items key={Item} FoodName={Item}></Items>
  ))}
  </ul>

    </>
  );
}

export default FoodItems;