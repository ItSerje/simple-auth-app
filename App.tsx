import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import Button from './src/components/button/Button';
import LoginForm from './src/components/form/LoginForm';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnContainer}>
        <Button text='Logout' onPress={() => setIsLoggedIn(false)} />
      </View>
      <WebView
        source={{ uri: 'https://www.google.com/' }}
        style={styles.webview}
      />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    alignSelf: 'stretch',
    padding: 15,
  },
  webview: {
    height: '100%',
    width: '100%',
    zIndex: 1,
    borderWidth: 1,
  },
});
