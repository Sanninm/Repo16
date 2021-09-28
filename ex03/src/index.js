// Only change code below this line 
class Person {
show() {
    console.log(Person.display());
}
static display(message) {
   var message = "Static method is invoked from Person class";
   return message;
}
}

// Only change code above this line
var message = new Person ();
message.show();
module.exports = Person;
