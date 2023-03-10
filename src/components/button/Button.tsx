import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';
import { FC } from 'react';
import styles from './Button.style';

type TButtonProps = TouchableOpacityProps & {
  text: string;
};

const Button: FC<TButtonProps> = (props) => {
  const { text, ...rest } = props;
  return (
    <TouchableOpacity style={styles.touchable} {...rest}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
