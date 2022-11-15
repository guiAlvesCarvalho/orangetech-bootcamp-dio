import { ButtonContainer } from "./styles";

const Button = ({info, label, onClick}) => {
    return (
      <ButtonContainer info={info} onClick={onClick} type="button" >
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;