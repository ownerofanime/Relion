import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../context/AuthContext';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ConnectionsScreen from '../screens/ConnectionsScreen';
import ConnectionDetailScreen from '../screens/ConnectionDetailScreen';
import AddConnectionScreen from '../screens/AddConnectionScreen';
import AIAdvisorScreen from '../screens/AIAdvisorScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { userId } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userId ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Connections" component={ConnectionsScreen} />
            <Stack.Screen name="ConnectionDetail" component={ConnectionDetailScreen} />
            <Stack.Screen name="AddConnection" component={AddConnectionScreen} />
            <Stack.Screen name="AIAdvisor" component={AIAdvisorScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
