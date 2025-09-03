

import style from './Container.module.css';
export let Container = ({children}) => {
  return (
    <>
    <div className={style.container}>{children}</div>
    </>
  )
}