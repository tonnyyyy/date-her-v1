import uuid from 'react-uuid';
import { Container, InputStyle, LabelStyle } from './styles';

interface IInputProps {
  label: string;
  type?: 'text' | 'checkbox',
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  labelSize?: string;
}

const Input: React.FC<IInputProps> = ({ label, placeholder, labelSize, ...props }) => {
  const inputId = uuid();

  return (
    <Container style={{ flexDirection: props.type === 'checkbox' ? 'row-reverse' : 'column' }}>
      <LabelStyle htmlFor={inputId} style={{ fontSize: labelSize }} >{label}</LabelStyle>
      <InputStyle placeholder={placeholder} id={inputId} {...props} />
    </Container>
  );
};

export default Input;