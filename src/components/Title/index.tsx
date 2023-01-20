interface ITitleProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Title: React.FC<ITitleProps> = ({ text, size = 'lg' }) => {
  const styles = {
    sm: () => {
      return {}
    },
    md: () => {
      return {}
    },
    lg: () => {
      return {
        fontSize: '2.25rem',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgb(30,30,30)',
      }
    }
  }

  return <h1 style={styles[size]()}>{text}</h1>;
};

export default Title;