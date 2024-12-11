// Import the necessary classes and interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import Car from './Car.js';
import Motorbike from './Motorbike.js';

// Truck class extends Vehicle and implements AbleToTow
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = [],
    towingCapacity: number
  ) {
    super(); // Call the parent class constructor
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;

    // Ensure there are at least 6 wheels, or initialize new ones
    this.wheels =
      wheels.length >= 6
        ? wheels
        : [new Wheel(), new Wheel(), new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Car | Motorbike | Truck): void {
    const vehicleDescription = `${vehicle.make} ${vehicle.model}`;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The truck is towing the ${vehicleDescription}.`);
    } else {
      console.log(`The ${vehicleDescription} is too heavy to tow.`);
    }
  }

  // Override the printDetails method from Vehicle
  override printDetails(): void {
    super.printDetails(); // Call the parent class method
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
    console.log('Wheels:');
    this.wheels.forEach((wheel, index) => {
      console.log(`  Wheel ${index + 1}: ${wheel.getDiameter}" - ${wheel.getTireBrand}`);
    });
  }
}

// Export the Truck class
export default Truck;
