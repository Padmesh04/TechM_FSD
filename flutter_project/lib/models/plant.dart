class Plant {
  final String name;
  final String description;
  final String wateringSchedule;
  final String imageUrl;

  // Const constructor for immutability
  const Plant({
    required this.name,
    required this.description,
    required this.wateringSchedule,
    required this.imageUrl,
  });

  // Factory constructor to create a Plant object from JSON
  factory Plant.fromJson(Map<String, dynamic> json) {
    return Plant(
      name: json['name'] as String,
      description: json['description'] as String,
      wateringSchedule: json['wateringSchedule'] as String,
      imageUrl: json['imageUrl'] as String,
    );
  }

  // Method to convert a Plant object into a JSON map
  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'description': description,
      'wateringSchedule': wateringSchedule,
      'imageUrl': imageUrl,
    };
  }

  // Override toString() for better debugging
  @override
  String toString() {
    return 'Plant(name: $name, description: $description, wateringSchedule: $wateringSchedule, imageUrl: $imageUrl)';
  }
}
