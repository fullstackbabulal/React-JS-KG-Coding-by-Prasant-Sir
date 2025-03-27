import styles from "./Items.module.css"
export let Items = ({FoodName}) => (
  <li className="list-group-item">{FoodName}
  <button className={`${styles.button} btn btn-info`}>Buy</button>
  </li>
)