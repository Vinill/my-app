import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AddCar from '../screens/AddCar'
import AddWin from '../screens/AddWin'
import Home from '../screens/Home'
import Regist from '../screens/RegistCar'
import Ready from '../screens/Request'



const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >

                <Stack.Screen
                    name = 'Home'
                    component = { Home }
                />

                <Stack.Screen
                    name = 'Ready'
                    component = { Ready }
                />

                <Stack.Screen
                    name = 'Regist'
                    component = { Regist }
                />

                <Stack.Screen
                    name = 'AddCar'
                    component = { AddCar }
                />

                <Stack.Screen
                    name = 'AddWin'
                    component = { AddWin }
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack