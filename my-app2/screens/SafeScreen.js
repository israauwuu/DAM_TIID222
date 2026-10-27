
/*1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import {SafeAreaView} from 'react-native';


/*2. Zona "Main" */
export default function SafeScreen() {
  return(
   <SafeAreaView style={styles.safeArea}>
  
  <ScrollView contentContainersStyle={styles.scrollContent}>

      <Text style={styles.title}> Practica de uriel </Text>
      <Text style={styles.subtitle}> Desliza hacia abajo par ver mas</Text>

      {[...Array(15)].map((_, index) => (
          <View key={index} style={styles.box}>
              <Text>Refistro de prueba {index + 1}</Text>
          </View>
      )
      )}
  </ScrollView>
  
  </SafeAreaView>
   
  )
}

/*3. Zona de estilos  */
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#00BFFF'
  },

  scrollContent:{
    padding:20,
    alignItems:'center'
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:10
  },

  subtitle:{
    fontSize:16,
    color:'#666',
    marinBottom:20,
  },

  box:{
    backgroundColor:'white',
    width:'90%',
    padding:30,
    marginVertical:10,
    borderRadius:8,
    elevation:3
  }
});
