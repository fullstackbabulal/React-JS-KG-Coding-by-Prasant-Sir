import style from "./ErrorMessage.module.css"


let ErrorMessage = ({foodItem}) => (
    <>
    {foodItem.length == 0 && <h3 className={style.message}>Still I am Hungry</h3>}
    </>
  )


export default ErrorMessage;