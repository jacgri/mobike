# Mobike Assignment

Completing the following assignment for mcrCodes course to support learning of Object Oriented Programming.

Assignment:
Create an application for Mobikes.
Use the prototype/constructor pattern to create a Bike object and a Quarter object (i.e. Green Quarter, Northern Quarter etc).
Each Quarter should be instantiated with a _name property, and you should create a getter method on the prototype in order to retrieve this name from the object instance (getName).
Each bike should be instantiated with a given Quarter (i.e. new Bike(northernQuarter)) and a _currentLocation property on the instance of the Bike should store this Quarter object. Make sure you have a getter method for this also so you can retrieve the location of the Bike (getCurrentLocation).
Bike should also have a cycle method on its prototype that takes an instance of Quarter and “cycles” to that quarter (i.e the _currentLocation property's value on the Bike instance is updated to a new Quarter object)

Using console.log to test the code is working,

