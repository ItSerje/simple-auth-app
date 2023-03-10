import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    margin: 16,
    gap: 10,
    position: 'relative',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  messageContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -40,
  },
});

export default styles;
