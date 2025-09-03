import style from "./InputText.module.css"

export let InputText = () =>{
  return(
    <>
    <input type="text" placeholder="Enter Todo Item Here" className={style.inputText} />
    </>
  )
}