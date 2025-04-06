import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/plant.dart';

class ApiService {
  Future<List<Plant>> fetchPlants() async {
    final response = await http.get(Uri.parse('https://example.com/api/plants'));

    if (response.statusCode == 200) {
      List<dynamic> data = jsonDecode(response.body);
      return data.map((plant) => Plant.fromJson(plant)).toList();
    } else {
      throw Exception('Failed to load plants');
    }
  }
}
