import {Platform, PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import showToast from './toast';

export const getToken = async () => {
  try {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
  } catch (error) {
    console.error('Error fetching FCM token:', error);
  }
};

export const requestPermissionAndroid = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      getToken();
    } else {
      showToast('Permission Denied');
    }
  } catch (error) {
    console.error('Error requesting notification permission:', error);
  }
};

export const requestPermissionIOS = async () => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  } catch (error) {
    console.error('Error requesting iOS notification permission:', error);
  }
};

export const requestPermission = () => {
  if (Platform.OS === 'android') {
    requestPermissionAndroid();
  } else {
    requestPermissionIOS();
  }
};
