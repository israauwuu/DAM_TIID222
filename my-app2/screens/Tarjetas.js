
/*1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Perfil} from '../components/Perfil';

/*2. Zona "Main" */
export default function Tarjetas() {
  return (

    <View style={styles.container}>

    
      <Perfil style={styles.tarjeta1} nombre="Israel" carrera="ITIID" materia="Programación Móvil" cuatrimestre="4to cuatrimestre"/>

      <Perfil style={styles.tarjeta2} nombre="Emilio" carrera="ITIID" materia="Programación Móvil" cuatrimestre="4to cuatrimestre"/>

      <Perfil style={styles.tarjeta3} nombre="Jorge" carrera="ITIID" materia="Programación Móvil" cuatrimestre="4to cuatrimestre"  />

      <StatusBar style="auto" />

    </View>

  );
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

  tarjeta1:{
    backgroundColor:'lightblue',
  },
  tarjeta2:{
    backgroundColor:'lightgreen',
  },

  tarjeta3:{
    backgroundColor:'lightyellow',
  }

});
