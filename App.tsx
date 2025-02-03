import React, {useEffect} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import Navigation from './src/navigation/StackNavigator';
import messaging from '@react-native-firebase/messaging';
import {useAuthStore} from './src/store/authStore';
import Loader from './src/components/Loader';
import {requestPermission} from './src/utils/permission';
import {displayNotification} from './src/utils/notification';
import {RootStackParamList} from './src/utils/types';

const App = () => {
  const {isLoggedIn, checkLoginStatus} = useAuthStore();
  const navigationRef =
    React.useRef<NavigationContainerRef<RootStackParamList>>(null);

  useEffect(() => {
    requestPermission();
    checkLoginStatus();

    // Handle notification when app is in foreground
    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
      if (remoteMessage.notification) {
        await displayNotification(remoteMessage);
      }
    });

    // Handle notification tap when app is background/closed
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(remoteMessage);
      if (remoteMessage && navigationRef.current) {
        navigationRef.current.navigate('appoinment');
      }
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage && navigationRef.current) {
          navigationRef.current.navigate('appoinment');
        }
      });

    return () => {
      unsubscribeForeground();
    };
  }, []);

  if (isLoggedIn === null) {
    return <Loader />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigation initialRouteName={isLoggedIn ? 'home-tabs' : 'login'} />
    </NavigationContainer>
  );
};

export default App;
