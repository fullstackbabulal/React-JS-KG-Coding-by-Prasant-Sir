import style from './Container.module.css';


let Container = ({children}) =>{
  return(
    <div className={style.con}>
      {children}
    </div>
  );
}

export default Container;