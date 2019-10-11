/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - occurs when dot notation is used to invoke a function
* 2. New Binding- occurs when the new keyword is used to create a new obj. the new object is "this".
* 3. Explicit Binding- looks at where the function is being invoked. Can use method such as .call .apply .bind to assign "this".
* 4. Global Binding - "this" is the Window/Console Object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function saySomething() {
    console.log(this)
  }
  
  // or
  
  setTimeout( function() {console.log(this)}, 1000)
  
  // Principle 2
  
  // code example for Implicit Binding
  const MyObject = function () {
    this.name = 'MyObjectName';
    this.attribute = 'attribute';
  };
  
  MyObject.prototype.doSomething = function (something) {
    console.log(this.name + ' is ' + something + '!');
  }
  
  const obj = new MyObject();
  
  obj.doSomething('epic');
  
  // Principle 3
  
  // code example for New Binding
  
  function RunningPerson(runner) {
    this.pace = 'is running a 6 min/mile.';
    this.runner = runner;
    this.speak = function() {
        console.log(this.runner + this.pace);
        console.log(this);
    }
  }
  
  const john = new RunningPerson('John');
  john.speak();
  
  // Principle 4
  
  // code example for Explicit Binding
  const coder = {name: 'John', myFavoriteActivity: 'coding'};
  MyObject.prototype.doSomething.call(coder, coder.myFavoriteActivity);