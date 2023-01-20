import { TextStyle } from "./styles";

interface ITextProps {
  children: React.ReactNode;
  textAlign?: 'left' | 'center' | 'right';
  fontSize?: string;
}

const Text: React.FC<ITextProps> = ({ children, ...props }) => {
  return (
    <TextStyle style={{ ...props }}>{children}</TextStyle>
  )
}

export default Text;