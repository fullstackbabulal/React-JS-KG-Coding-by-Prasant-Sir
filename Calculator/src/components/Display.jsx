import style from './Display.module.css';


let Display = ({displayValue})=>{
  return(
    <>
    <input type="text" readOnly className={style.displayScreen} value={displayValue}/>
    </>
  );
};

export default Display;