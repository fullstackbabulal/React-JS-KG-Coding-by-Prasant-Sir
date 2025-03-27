import css from './Container.module.css'


let Container = ({children}) => {
return(
  <div className={css.container}>
    {children}
  </div>
);

}

export default Container;