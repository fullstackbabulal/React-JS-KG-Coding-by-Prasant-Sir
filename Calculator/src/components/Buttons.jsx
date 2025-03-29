import style from './Buttons.module.css';
import ButtonContainer from './ButtonContainer';


let Buttons = ({calculatoButton, hendelButtonClick})=>{
  return(
    <div className={style.buttonCalculator}>
    {calculatoButton.map((btn, index)=>(
      <ButtonContainer key={index} btn={btn} hendelButtonClick={hendelButtonClick}/>
    ))}
    </div>
  );
};

export default Buttons;