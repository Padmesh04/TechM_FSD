import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import '../models/plant.dart';

class DatabaseService {
  Future<Database> initDB() async {
    final path = join(await getDatabasesPath(), 'plants.db');

    return openDatabase(path, version: 1, onCreate: (db, version) async {
      await db.execute("CREATE TABLE plants(id INTEGER PRIMARY KEY, name TEXT, description TEXT, wateringSchedule TEXT)");
    });
  }

  Future<void> insertPlant(Plant plant) async {
    final db = await initDB();
    await db.insert('plants', {'name': plant.name, 'description': plant.description, 'wateringSchedule': plant.wateringSchedule});
  }
}
