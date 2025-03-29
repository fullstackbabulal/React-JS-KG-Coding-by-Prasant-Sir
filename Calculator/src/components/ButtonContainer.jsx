import style from './ButtonContainer.module.css'
let ButtonContainer = ({btn, hendelButtonClick}) => {
  return(
    <>
    <button className={style.buttonCalculator} onClick={hendelButtonClick}>{btn}</button>
    </>
  )
}

export default ButtonContainer;