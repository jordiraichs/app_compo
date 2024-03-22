import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// funcions i propietats
import Fun_props from './components/Fun_props';
import Var_estat from './components/Var_estat';

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
      <Fun_props llenguatge="JavaScript" assignatura="Mòdul 8"/>
      
      <Var_estat />
      
      <StatusBar style="auto" />
    </View>
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
