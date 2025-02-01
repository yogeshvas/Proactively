import {Alert, Platform, ToastAndroid} from 'react-native';
import {ShowToast} from './types';
// TODO Move this to helpers
const showToast: ShowToast = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert('Message', message);
  }
};

export default showToast;
