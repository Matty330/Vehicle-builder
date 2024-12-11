// Import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Create an array of vehicles
const vehicles = [];

// Initialize Truck
const truck1 = new Truck(
  Cli.generateVin(),
  "red",
  "Ford",
  "F-150",
  2021,
  5000,
  120,
  [],
  10000
);
vehicles.push(truck1);

// Initialize Car
const car1 = new Car(
  Cli.generateVin(),
  "blue",
  "Toyota",
  "Camry",
  2021,
  3000,
  130,
  []
);
vehicles.push(car1);

// Initialize Motorbike
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(
  Cli.generateVin(),
  "black",
  "Harley Davidson",
  "Sportster",
  2021,
  500,
  125,
  motorbike1Wheels
);
vehicles.push(motorbike1);

// Test Motorbike Functionality
motorbike1.printDetails(); // Print motorbike details
motorbike1.wheelie();      // Perform a wheelie

// Create a new instance of the CLI class
const cli = new Cli(vehicles);

// Start the CLI
cli.startCli();
