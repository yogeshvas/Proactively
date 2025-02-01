import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setIsLoggedIn(true); // User is logged in
      } else {
        setIsLoggedIn(false); // No user found, so they are not logged in
      }
    };
    checkLoginStatus();
  }, []);
  if (isLoggedIn === null) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Navigation initialRouteName={isLoggedIn ? 'home-tabs' : 'login'} />
    </NavigationContainer>
  );
};

export default App;
