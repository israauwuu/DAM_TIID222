
/*1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';


/*2. Zona "Main" */
export default function ImageBackground() {
  return(
    <View style={styles.container}>

        <Text>Practica de </Text>

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
