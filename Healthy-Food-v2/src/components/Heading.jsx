import css from './Heading.module.css';

let Heading = ({onChangeHandler}) =>{
  return(
    <input type="text" className={css.inputBox} placeholder='Enter Food Here' onChange={onChangeHandler} />
  )
}

export default Heading;