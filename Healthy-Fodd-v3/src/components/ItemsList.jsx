import style from './ItemsList.module.css';



let ItemsList = ({item}) => {
  return(
    <>
    <li className={style.list}>{item}<button className={style.btn}>Buy</button></li>
    </>
  )
}

export default ItemsList;