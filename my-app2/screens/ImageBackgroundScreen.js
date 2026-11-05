
/*1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground, Platform, ActivityIndicator} from 'react-native';
import {useState, useEffect} from 'react';

/*2. Zona "Main" */
export default function ImageBackgroundScreen() {
  
  const [showSplash, setShowSplash] = useState(true);

  useEffect(()=> {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  
  if (showSplash){
    return(
      <View style = {styles.splashContainer}>
        <ActivityIndicator size = "large" color = "#f0f0f0" style={{marginTop: 20}}/>
        <Text style = {styles.splashLoading}>Cargando...</Text>
      </View>
    )
  }
  
  return(
   
   <ImageBackground 
   source = {{ uri: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
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
