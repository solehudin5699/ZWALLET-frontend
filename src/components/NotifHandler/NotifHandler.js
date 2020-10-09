import PushNotification from 'react-native-push-notification';
let ignoreNotif = false;
const setIgnoreNotif = () => {
  return (ignoreNotif = !ignoreNotif);
};
// class NotificationController {

// }
const showLocalNotification = (title, message, channelId) => {
  PushNotification.localNotification({
    channelId,
    title,
    message,
    largeIcon: 'ic_launcher_round',
    // ignoreInForeground: ignoreNotif,
  });
};

const showLocalNotificationScheduled = (title, message, channelId) => {
  PushNotification.localNotificationSchedule({
    channelId,
    title,
    message,
    date: new Date(Date.now() + 5 * 1000),
  });
};

const cancelAllNotification = () => {
  PushNotification.cancelAllLocalNotifications();
};

export {
  setIgnoreNotif,
  ignoreNotif,
  showLocalNotification,
  showLocalNotificationScheduled,
  cancelAllNotification,
};
