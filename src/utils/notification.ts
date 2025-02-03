import notifee, {AndroidImportance} from '@notifee/react-native';

export const displayNotification = async (remoteMessage: any) => {
  try {
    await notifee.requestPermission();

    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
      importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
      title: remoteMessage.notification?.title || 'No Title',
      body: remoteMessage.notification?.body || 'No Body',
      android: {
        channelId: 'default',
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default',
        },
      },
    });
  } catch (error) {
    console.error('Error displaying notification:', error);
  }
};
