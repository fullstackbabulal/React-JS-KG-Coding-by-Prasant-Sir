import style from "./DueDate.module.css"
export let DueDate = () =>{
  return(
    <>
    <input type="date" className={style.dueDate}/>
    </>
  )
}