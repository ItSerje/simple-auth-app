import { View, Text } from 'react-native';
import { FC, useState } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import { baseUrl, token } from '../../constants';
import { IResponse } from '../../types/types';
import styles from './LoginForm.style';

interface ILoginForm {
  setIsLoggedIn: (value: boolean) => void;
}

const LoginForm: FC<ILoginForm> = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async () => {
    console.log(baseUrl);
    try {
      const response = await fetch(baseUrl! + '/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responseJson: IResponse = await response.json();
      const records = responseJson.records.map((field) => field.fields);
      const areCredentialsValid =
        records.filter(
          (record) =>
            record.username === username && record.Password === password
        ).length > 0;
      if (!areCredentialsValid) {
        setErrorMessage('Wrong credentials');
        setTimeout(() => setErrorMessage(''), 3000);
      } else {
        setErrorMessage('');
      }
      setIsLoggedIn(areCredentialsValid);
    } catch (e: unknown) {
      setIsLoggedIn(false);
      setErrorMessage('Connection failure');
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  return (
    <View style={styles.formContainer}>
      {errorMessage !== '' && (
        <View style={styles.messageContainer}>
          <Text>{errorMessage}</Text>
        </View>
      )}
      <View style={styles.inputContainer}>
        <Input
          placeholder='Username'
          textContentType='username'
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder='Password'
          textContentType='password'
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <Button text='Login' onPress={onSubmit} />
    </View>
  );
};

export default LoginForm;
