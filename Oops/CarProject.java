package Task.Oops;

public class CarProject {
        public static void main(String[] args) {
            // Create an array of Car objects
            Car[] cars = new Car[4];
            cars[0] = new Car("BMW", "iX1 LWB", 2025);
            cars[1] = new ElectricCar("Mahindra", "XUV 700 ", 2025, 535);
            cars[2] = new Car("Porshce", "911", 2025);
            cars[3] = new ElectricCar("Hyundai", "Verna", 2025, 390);

            // Loop through the array and call startEngine() on each object
            for (Car car : cars) {
                car.startEngine();
                if (car instanceof ElectricCar) {
                    ((ElectricCar) car).chargeBattery(); // Call chargeBattery if it's an ElectricCar
                }
            }
        }
    }

