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
  

  
  // Principle 2
  
  // code example for Implicit Binding
  const MyObject = function () {
    this.name = 'My Lilly';
    this.attribute = 'attribute';
  };
  
  MyObject.prototype.doSomething = function (something) {
    console.log(this.name + ' is ' + something + '!');
  }
  
  const obj = new MyObject();
  
  obj.doSomething('epic');
  
  // Principle 3
  
  // code example for New Binding
  
  
  function User (name, age) {
  
    this.name = name
    this.age = age
  }
  
  const me = new User('Alexis', 30)
  
  // Principle 4
  
  // code example for Explicit Binding
  function greeting () {
    alert(`Hello, my name is ${this.name}` )
  }
  
  const user = {
    name: 'Alexis',
    age:30,
  }
greeting.call(user)
