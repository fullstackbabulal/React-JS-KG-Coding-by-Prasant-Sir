import ItemsList from "./ItemsList";
import styles from "./FoodList.module.css";


let FoodList = ({ foodItem, removeItem }) => {
  return (
    <>
      <ul className={styles.listGroup}>
        {foodItem.map((item, index) => (
          <ItemsList key={index} item={item} removeItem={removeItem}></ItemsList>
          
        ))}
      </ul>
    </>
  );
};

export default FoodList;
