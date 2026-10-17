
/*1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Saludo} from './components/Saludo.js';
import {Saludo2} from './components/Saludo2.js';
import {Perfil} from './components/Perfil.js';

/*2. Zona "Main" */
export default function App() {
  return (

    <View style={styles.container}>

    
      <Perfil nombre="Israel" carrera="ITIID" materia="Programación Móvil" cuatrimestre="4to cuatrimestre"/>

      <Perfil nombre="Emilio" carrera="ITIID" materia="Programación Móvil" cuatrimestre="4to cuatrimestre"/>

      <Perfil nombre="Jorge" carrera="ITIID" materia="Programación Móvil" cuatrimestre="4to cuatrimestre"  />

      <StatusBar style="auto" />

    </View>

  );
}

/*3. Zona de estilos  */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
