import { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './Input.style';

const Input: FC<TextInputProps> = (props) => {
  return <TextInput style={styles.input} {...props} />;
};

export default Input;
