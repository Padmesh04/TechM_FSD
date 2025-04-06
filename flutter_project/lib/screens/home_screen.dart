import 'package:flutter/material.dart';
import '../models/plant.dart';
import 'plant_detail_screen.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final List<Plant> plants = [
      Plant(
        name: 'Rose',
        description: 'Needs watering every 2 days',
        wateringSchedule: '2 days',
        imageUrl: 'https://images.unsplash.com/photo-1512002022025-1c1c1c1c1c1c',
      ),
      Plant(
        name: 'Cactus',
        description: 'Water once a week',
        wateringSchedule: '7 days',
        imageUrl: 'https://images.unsplash.com/photo-1581349491280-1c1c1c1c1c1c',
      ),
      Plant(
        name: 'Tulip',
        description: 'Needs watering every 3 days',
        wateringSchedule: '3 days',
        imageUrl: 'https://images.unsplash.com/photo-1526401485004-59582bb923a1',
      ),
      Plant(
        name: 'Sunflower',
        description: 'Needs watering every 5 days',
        wateringSchedule: '5 days',
        imageUrl: 'https://images.unsplash.com/photo-1504415724575-56cef5e3da5a',
      ),
      Plant(
        name: 'Orchid',
        description: 'Water every 4-5 days',
        wateringSchedule: '4-5 days',
        imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
      ),
      Plant(
        name: 'Bamboo',
        description: 'Keep soil slightly moist',
        wateringSchedule: '3-4 days',
        imageUrl: 'https://images.unsplash.com/photo-1523906630133-f6934a1ab1de',
      ),
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Plant Care'),
        backgroundColor: Colors.green[700],
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: GridView.builder(
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            childAspectRatio: 0.8,
            crossAxisSpacing: 10,
            mainAxisSpacing: 10,
          ),
          itemCount: plants.length,
          itemBuilder: (context, index) {
            return GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => PlantDetailScreen(plant: plants[index]),
                  ),
                );
              },
              child: Card(
                elevation: 5,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Expanded(
                      child: ClipRRect(
                        borderRadius: const BorderRadius.vertical(top: Radius.circular(12)),
                        child: Image.network(
                          plants[index].imageUrl,
                          fit: BoxFit.cover,
                          width: double.infinity,
                          loadingBuilder: (context, child, loadingProgress) {
                            if (loadingProgress == null) return child;
                            return const Center(child: CircularProgressIndicator());
                          },
                          errorBuilder: (context, error, stackTrace) {
                            return Container(
                              width: double.infinity,
                              color: Colors.grey[300],
                              child: const Center(
                                child: Icon(Icons.broken_image, size: 50, color: Colors.red),
                              ),
                            );
                          },
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Column(
                        children: [
                          Text(
                            plants[index].name,
                            style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                          ),
                          Text(
                            plants[index].description,
                            textAlign: TextAlign.center,
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}