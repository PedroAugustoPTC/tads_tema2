import React from 'react';

import Login from '../pages/Login/index';
import Rates from '../pages/Rates/index';
import ChangePassword from '../pages/ChangePassword/index';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Routes() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Rates" component={Rates} />
                <Stack.Screen name="ChangePassword" component={ChangePassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;
