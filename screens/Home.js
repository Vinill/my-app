import React, { useState }  from 'react'
import { View, StyleSheet, Modal } from 'react-native'
import { MapComponent } from '../components/Map'
import { MapButton, MapNav } from '../components/Buttons'
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
                            height: '40%',
                            width: '100%',
                            backgroundColor: '#FFFF',
                    }}>

                        <View
                            style={{
                                height: 50,
                            }}
                        >
                            <View 
                                style= {{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                paddingHorizontal: 10,
                            }}
                            >
                                <Icon onPress={() => {setView(false);}} style={styles.IconSearch__black} name="close-outline" size={30} color="#900" />
                            </View>
                            <View style={styles.service_let}>
                                <MapButton
                                    text = 'RESERVA CON ANTICIPACION'
                                    onPress = { () => {
                                        navigation.navigate('Ready')
                                    }}
                                />
                            </View>
                            <View style={styles.service_now}>
                                <MapButton style={{ backgroundColor: '#FAFAFA',}} onPress={ () => {navigation.navigate('Ready')}} text = 'SOLICITAR SERVICIO AHORA'/>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: '100%',
        height: '100%',
    },
    service_now: {
        height: '100%',
        width: '100%',
        top: 30,
    },
    service_let: {
        height: '70%',
    },
})

export default Home;