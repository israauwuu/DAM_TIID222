
import {View, Text, Switch, StyleSheet} from 'react-native'
export default function SwitchMio({oscuro, cambiarModo}){
    return(
        <View style = {styles.container}>
            <Text style = {[styles.titulo, {color: oscuro ? 'white' : 'black'}]}>
                Modo oscuro
            </Text>

            <View style = {styles.switchContainer}>
                <Switch 
                value={oscuro}
                onValueChange={cambiarModo}/>
            </View>

            <Text style = {[styles.estado, {color: oscuro ? 'white' : 'black'}]}>
                {oscuro ? 'Esta actvado' : 'Esta desactivado'}
            </Text>
        </View>
    )


}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent:'center'
    },

    titulo:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:8
    },

    estado:{
        fontSize:14,
        fontWeight:'500',
        marginTop:8
    },

    switchContainer:{
        alignItems: 'center',
        justifyContent:'center'

    }

});