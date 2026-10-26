
/*1. Zona de importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import {useState} from 'react';
import Tarjetas from './Tarjetas.js';
import SafeScreen from './SafeScreen.js';
import PressableSwitch from './PressableSwitch.js'
import TextInput from './TextInput.js'
import FlatList from './FlatList.js'
import ImageBackground from './ImageBackground.js'
import ModalBottom from './ModalBottom.js'
import ActivityIndicator from './ActivityIndicator.js'


/*2. Zona "Main" */
export default function MenuScreen() {

    const[screen, setScreen] = useState('menu');
    
    switch(screen){
        case 'Tarjetas': 
            return <Tarjetas />;
        case 'SafeScreen': 
            return <SafeScreen />;
        case 'Pressable y Switch':
            return<PressableSwitch/>
        case 'TextInput':
            return<TextInput/>
        case 'FlatList':
            return<FlatList/>
        case 'ImageBackground':
            return<ImageBackground/>
        case 'ModalBotton':
            return<ModalBotton/>
        case 'ActivityIndicator':
            return<ActivityIndicator/>

        case 'menu':
            default:
                return(
                    <View style={styles.container}>

                        <Text>Menu de practicas</Text>

                        <Button title='Tarjetas' onPress={()=>setScreen('Tarjetas')}></Button>
                        <Button title='SafeAreaView' onPress={()=>setScreen('SafeScreen')}></Button>
                        <Button title='Pressable y Switch' onPress={()=>setScreen('Pressable y Switch')}></Button>
                        <Button title='TextInput' onPress={()=>setScreen('TextInput')}></Button>
                        <Button title='FlatList' onPress={()=>setScreen('FlatList')}></Button>
                        <Button title='ImageBackground' onPress={()=>setScreen('ImageBackground')}></Button>
                        <Button title='ModalBotton' onPress={()=>setScreen('ModalBotton')}></Button>
                        <Button title='ActivityIndicator' onPress={()=>setScreen('ActivityIndicator')}></Button>


                        <StatusBar style="auto" />
                    </View>
                )
    }
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
