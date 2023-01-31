// objects
let obj = {
  firstName: "Sunil",
  lastName: "Kumar",
  print: function () {
    // console.log(this.firstName +" "+ this.lastName);
    console.log(this.firstName, "", this.lastName);
  },
};

obj.print();

console.log(obj);
console.log(obj.firstName);
console.log(obj.lastName);

console.log(obj["firstName"]); // why this notation ? as dynamic render of page can be seen
var prop1 = "firstName";
var prop2 = "secondName";
console.log(obj[prop1]);
console.log(obj[prop2]);

// classes
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class student extends person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  print() {
    console.log(this.name);
    console.log(this.age);
    console.log(this.subject);
  }
}

var s1 = new student("Sunil Kumar", 23, "ECE");
var s2 = new student("Himanshu Setia", 23, "CSE");

console.log("classes ");
console.log(s1);
s1.print();
