
import { StyleSheet, Text, View, TextInput, Switch, Button, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [nombre, setNombre]=useState('');
  const [carrera, setCarrera]=useState('');
  const [semestre, setSemestre]=useState('');

  const[taller, setTaller]=useState(false);
  const[constancia, setConstancia]=useState(false);
  const[deportes, setDeportes]=useState(false);

  const enviarRegistro = () => {
    if(nombre.trim()===''|| carrera.trim()===''||semestre.trim()===''){
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
      );
      return;
    }

    if(isNaN(Number(Semestre))){
      Alert.alert(
        'Error',
        'El semestre debe de ser un numero'
      );
      return;
    }

    Alert.alert(
      'Registro exitoso',
      'Tus datos son correctos'
    );
  };


  return (
    <View style={styles.container}>
      <Text>Registro de Evento Universitario</Text>

      <Text>Nombre completo:</Text>
      <TextInput 
      placheholder="Escribe tu nombre"
      value={nombre}
      onChangeText={setNombre}
      />

      <Text>Carrera::</Text>
      <TextInput 
      placheholder="Escribe tu carrera"
      value={carrera}
      onChangeText={setCarrera}
      />
      
      <Text>Semestre:</Text>
      <TextInput 
      placheholder="Escribe tu semestre"
      value={semestre}
      onChangeText={setSemestre}
      />

      <Text>Preguntas del evento</Text>

      <View>
        <Text>¿Asistira al taller?</Text>
        <Switch
        value={taller}
        onValueChange={setTaller}
        />
      </View>

      <View>
        <Text>¿Requiere constancia?</Text>
        <Switch
        value={constancia}
        onValueChange={setConstancia}
        />
      </View>

      <View>
        <Text>¿Participará en actividades deportivas?</Text>
        <Switch
        value={deportes}
        onValueChange={setDeportes}
        />
      </View>

      <Button
      title="Enviar registro"
      onPress={enviarRegistro}
      />

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
