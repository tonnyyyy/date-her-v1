import { ButtonStyle } from "./styles";

interface IButtonProps {
  label: string;
  type?: 'button' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  background?: string;
}

const Button: React.FC<IButtonProps> = ({ label, background, ...props }) => {
  return (
    <ButtonStyle {...props} style={{ background }}>
      {label}
    </ButtonStyle>
  );
};

export default Button;