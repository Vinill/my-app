import React, { useState }  from 'react'
import { View, StyleSheet, Modal, Text } from 'react-native'
import { MapComponent } from '../components/Map'
import { Button, MapButton, MapNav, MyButton } from '../components/Buttons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';


const Home = ({ navigation }) => {

    const [view, setView] = useState(false);

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.map}>

                <MapComponent/>

            </SafeAreaView>
            <MapButton onPress={() => { setView(true); }} text = 'Confirmar ubicacion'/>
            <MapNav onPress = {() => alert('Ubicacion confirmada')} text = '-34.802243 -55.900519'/>
            <Modal
                animationType='slide'
                onDismiss={() => console.log('close')}
                transparent
                visible={ view }
            >
                <View
                    style={{
                        flex:1,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}
                >
                        <View
                            style={{
                                height: '45%',
                                width: '100%',
                                backgroundColor: '#FFF',
                        }}>

                            <View
                                style={{
                                    flexDirection: 'column',
                                    padding: 10,
                                }}
                            >
                                <View 
                                    style= {{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    paddingHorizontal: 10,
                                }}
                                >
                                    <Icon onPress={() => {setView(false);}} style={styles.IconSearch__black} name="close-outline" size={30} color="#808080" />
                                </View>
                                <View style={styles.Texts}>
                                    <Icon name="location-sharp" size={30} color="#000" style={{paddingEnd: 10,}}/>
                                    <Text style={{ fontWeight: 'bold', fontSize: 23, paddingStart: 10,}}>Ubicacion del servicio</Text>
                                </View>
                                <Text 
                                    style={{
                                        color: '#808080',
                                        alignSelf: 'center', 
                                        fontSize: 22, 
                                        fontWeight: '400',
                                        width: 200,
                                        textAlign: 'center',
                                        paddingTop: 10,
                                    }}>
                                    53RW+PH, 15800
                                    Ciudad de la Costa
                                </Text>
                                <View style={styles.service_let}>
                                    <Button
                                        text = 'RESERVA CON ANTICIPACION'
                                        onPress = { () => {navigation.navigate('Ready')}} />
                                </View>
                                <View style={styles.service_now}>
                                    <MyButton onPress={ () => {navigation.navigate('Ready')}} text = 'SOLICITAR SERVICIO AHORA'/>
                                </View>
                            </View>
                        </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    service_now: {
        width: '100%',
        top: 20,
    },
    service_let: {
        paddingTop: 50,
    },
    Texts: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingEnd: 30,
    },
})

export default Home;