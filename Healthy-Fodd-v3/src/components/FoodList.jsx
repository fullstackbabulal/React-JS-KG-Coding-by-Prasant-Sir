import ItemsList from "./ItemsList";
import styles from "./FoodList.module.css";


let FoodList = ({ foodItem }) => {
  return (
    <>
      <ul className={styles.listGroup}>
        {foodItem.map((item, index) => (
          <ItemsList key={index} item={item} ></ItemsList>
          
        ))}
      </ul>
    </>
  );
};

export default FoodList;
