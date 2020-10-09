import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  showLocalNotification,
  showLocalNotificationScheduled,
  cancelAllNotification,
} from '../components/NotifHandler/NotifHandler';
import PushNotification from 'react-native-push-notification';

const App = () => {
  const channelId = 'transfer-succes';

  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId,
        channelName: 'test notification',
      },
      (created) => console.log(`createChannel returned '${created}'`),
      // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text>Push Notification</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          showLocalNotification(
            'Transfer',
            'You has been success transfering to Solehudin',
            channelId,
          )
        }>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>
            Click to Get Notification right now
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() =>
          showLocalNotificationScheduled(
            'Notification From the Past',
            'Hello From 5 Seconds Ago',
            channelId,
          )
        }>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>
            Click to Get Notification 5 seconds later
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={cancelAllNotification}>
        <View style={styles.button}>
          <Text style={styles.buttonTitle}>
            Click to Cancel All Notification
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: 'blue',
    borderRadius: 24,
    marginTop: 10,
  },
  buttonTitle: {
    color: 'white',
  },
});
