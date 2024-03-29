import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
import { PaperProvider } from 'react-native-paper';
import MainAppbar from './components/MainAppbar';

export default function App() {
  return (
    <PaperProvider>
        <Login />
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
