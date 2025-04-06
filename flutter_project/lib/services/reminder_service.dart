import 'package:flutter_local_notifications/flutter_local_notifications.dart';

class ReminderService {
  final FlutterLocalNotificationsPlugin _notificationsPlugin = FlutterLocalNotificationsPlugin();

  Future<void> initNotifications() async {
    const AndroidInitializationSettings androidSettings = AndroidInitializationSettings('@mipmap/ic_launcher');
    final InitializationSettings settings = InitializationSettings(android: androidSettings);

    await _notificationsPlugin.initialize(settings);
  }

  Future<void> scheduleReminder(int id, String title, String body, DateTime scheduledTime) async {
    const AndroidNotificationDetails androidDetails =
        AndroidNotificationDetails('channelId', 'Plant Reminders', importance: Importance.high);
    const NotificationDetails details = NotificationDetails(android: androidDetails);

    await _notificationsPlugin.zonedSchedule(
      id,
      title,
      body,
      scheduledTime,
      details,
      androidAllowWhileIdle: true,
      uiLocalNotificationDateInterpretation: UILocalNotificationDateInterpretation.absoluteTime,
    );
  }
}
