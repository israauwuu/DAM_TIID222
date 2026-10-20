import {Text, View, StyleSheet, Button} from 'react-native';
import { useState } from 'react';

export const Perfil=({nombre, carrera, materia, cuatrimestre, style})=>{
    const [mostrar, setMostrar] = useState(false);
    return(
        <View style={[estilos.tarjeta, style]}>
            <Text style={estilos.nombre}> {nombre} </Text>

            {mostrar &&
            <>
            <Text style={estilos.carrera}> {carrera} </Text>
            <Text style={estilos.otroTexto}> {materia} </Text>
            <Text style={estilos.otroTexto}> {cuatrimestre} </Text>
            </>
            }
            <Button title={mostrar ? "Ocultar perfil" : "Mostrar perfil"} onPress={() => setMostrar(!mostrar)} />
        </View>
    )
}

const estilos=StyleSheet.create({
    nombre:{fontSize:24, 
            fontWeight:600,
            textTransform:'uppercase',
    },

    carrera:{
        fontSize:12,
        color:'red',
        fontFamily:'Roboto',
    },

    otroTexto:{
        fontSize:12,
        fontFamily:'Courier',
        fontStyle:'italic',
    },

    tarjeta:{
        borderRadius:10,
        borderWidth:1,
        padding:20,
        margin:15,
    }

});