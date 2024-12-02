import { View, Text, SafeAreaView } from 'react-native';
import Router from './src/navigation/Router';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#9ee4de" }}>
      <StatusBar barStyle={"dark-content"} />
      <Router />
    </SafeAreaView>
  )
};

export default App;