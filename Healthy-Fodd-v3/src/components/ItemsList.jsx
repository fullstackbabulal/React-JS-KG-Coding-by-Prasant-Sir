import style from './ItemsList.module.css';



let ItemsList = ({item, removeItem, index}) => {
  return(
    <>
    <li className={style.list}>{item}<button className={style.btn} onClick={()=>removeItem(index)}>Delete</button></li>
    </>
  )
}

export default ItemsList;