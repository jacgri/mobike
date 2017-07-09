# Mobike Assignment

Assignment:
Create an application for Mobikes.
Use the prototype/constructor pattern to create a Bike object and a Quarter object (i.e. Green Quarter, Northern Quarter etc).
Each Quarter should be instantiated with a _name property, and you should create a getter method on the prototype in order to retrieve this name from the object instance (getName).
Each bike should be instantiated with a given Quarter (i.e. new Bike(northernQuarter)) and a _currentLocation property on the instance of the Bike should store this Quarter object. Make sure you have a getter method for this also so you can retrieve the location of the Bike (getCurrentLocation).
Bike should also have a cycle method on its prototype that takes an instance of Quarter and “cycles” to that quarter (i.e the _currentLocation property's value on the Bike instance is updated to a new Quarter object).
You only need to console.log for this, but if you want to practise with jQuery or standard vanilla JS document methods then please feel free to render on the DOM.

Progress so far:
..* Created a Bike object which stores a bike name and quarter
..* Created a prototype for the Bike Object which give the user-friendly name and quarter 
..* Next step to create a function which allows you to change the quarter