import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import MainStack from './navigation/MainStack';

//<></>
//<MapButton onPress = {() => alert('Ubicacion confirmada')} text = 'Confirmar ubicacion'/>
//<MapNav onPress = {() => alert('Ubicacion confirmada')} text = '-34.802243 -55.900519'/>

function App() {
  return (
    <View style={{ flex: 1 }}>

        <MainStack/>

    </View>
  );
}

export default App;