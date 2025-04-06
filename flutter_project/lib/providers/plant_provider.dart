import 'package:flutter/material.dart';
import '../models/plant.dart';
import '../services/api_service.dart';

class PlantProvider with ChangeNotifier {
  List<Plant> _plants = [];

  List<Plant> get plants => _plants;

  Future<void> fetchPlants() async {
    try {
      _plants = await ApiService().fetchPlants();
      notifyListeners();
    } catch (e) {
      print("Error fetching plants: $e");
    }
  }
}
