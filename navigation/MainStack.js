import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import Ready from '../screens/Ready'


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

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack