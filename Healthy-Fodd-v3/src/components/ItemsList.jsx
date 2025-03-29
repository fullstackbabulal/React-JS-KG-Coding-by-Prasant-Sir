import style from './ItemsList.module.css';



let ItemsList = ({item, removeItem}) => {
  return(
    <>
    <li className={style.list}>{item}<button className={style.btn} onClick={removeItem}>Buy</button></li>
    </>
  )
}

export default ItemsList;