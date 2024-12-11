# vehicle builder CLI

## Description 
welcome to my vehicle builder CLI! THis is a command-line application built in TypeScript that lets users create and manage various types of vehicles. It supports cars, trucks, and motorbikes, each with its own unique features and actions. I developed this project to practice working with existing codebases while learning how to extend functionality and manage different object types.

The application uses interactive prompts, so you don't have to memorize commands instead, you can simply follow the instructions to create new vehicles, select existing ones, and perform specific actions like accelerating, reversing, or even towing (if you're using a truck) or doing a wheelie (if you're riding a motorbike). Its all about exploring how vehicles behave while managing a small fleet-all in your terminal!

I hope you enjoy using this tool as much as i enjoyed building it. It was a great challenge to enhance the existing starter code and add new functionality while keeping everything organized and easy to use.

Features
Create Vehicles: Choose to create a car, truck, or motorbike.
Unique Vehicle Behaviors:
Trucks can tow other vehicles within their towing capacity.
Motorbikes can perform a fun wheelie action.
Interactive CLI: Built with inquirer for a smooth and intuitive terminal experience.
Dynamic Actions: Perform various actions on your vehicles:
Start, stop, accelerate, decelerate, turn, reverse, print details.
Reusable Code: The code is modular and extensible, making it easy to add new features or vehicle types in the future.

Usage
Once the application is running, you'll be presented with a menu. Here’s how it works:

Choose whether to create a new vehicle or select an existing one.
If creating a new vehicle, you'll be prompted to select the type of vehicle (Car, Truck, or Motorbike) and provide details such as color, make, model, and more.
Once a vehicle is created or selected, you can perform actions on it. These include:
Printing vehicle details.
Starting and stopping the vehicle.
Accelerating or decelerating.
Turning left or right.
Reversing.
Unique actions:
Trucks: Tow another vehicle.
Motorbikes: Perform a wheelie.
You can always go back to the main menu to select or create another vehicle, or exit the application when you're done.

Why I Built This
This project was part of a coding challenge to expand an existing codebase. It helped me:

Understand how to work with pre-written code.
Practice implementing interfaces, classes, and unique logic for different object types.
Gain hands-on experience with TypeScript, especially in organizing and extending modular applications.
License
This project is licensed under the ISC License.