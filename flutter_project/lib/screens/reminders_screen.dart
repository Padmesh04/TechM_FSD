import 'package:flutter/material.dart';
import '../services/reminder_service.dart';

class RemindersScreen extends StatefulWidget {
  const RemindersScreen({super.key});

  @override
  _RemindersScreenState createState() => _RemindersScreenState();
}

class _RemindersScreenState extends State<RemindersScreen> {
  final ReminderService _reminderService = ReminderService();
  final TextEditingController _reminderTimeController = TextEditingController();

  @override
  void initState() {
    super.initState();
    _reminderService.initNotifications();
  }

  void _setReminder() {
    DateTime now = DateTime.now();
    DateTime reminderTime = now.add(const Duration(seconds: 10));

    _reminderService.scheduleReminder(1, "Water Your Plants", "Don't forget to water your plants!", reminderTime);
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text("Reminder Set!")));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Set Watering Reminder")),
      body: Center(
        child: ElevatedButton(onPressed: _setReminder, child: const Text("Set Reminder")),
      ),
    );
  }
}
