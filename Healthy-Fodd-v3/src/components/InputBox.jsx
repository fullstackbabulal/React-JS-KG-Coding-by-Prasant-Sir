import style from './InputBox.module.css'


let InputBox = ({keyOnDown}) =>{
  return(
    <>
    <input type="text" className={style.inputBox} onKeyDown={keyOnDown}/>
    </>
  );
}

export default InputBox;