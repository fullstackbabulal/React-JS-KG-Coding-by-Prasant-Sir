import styles from './Items.module.css';
let Items = ({FoodName})=>{
  return(
    <>
  <li className={`${styles.items} list-group-item fs-4`}>{FoodName}
  <button className={`${styles.button} btn btn-info`}
  onClick={()=>console.log(`${FoodName} being bought`)}
  >Buy</button>
  </li>
    </>
  )
}

export default Items;