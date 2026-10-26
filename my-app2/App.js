
/*1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import MenuScreen from './screens/MenuScreen';

/*2. Zona "Main" */
export default function App() {
  return(
    <View style={styles.container}>

        <MenuScreen></MenuScreen>
        <Text></Text>
      <StatusBar style="auto" />
    </View>
  )
}

/*3. Zona de estilos  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%'
  },
});
