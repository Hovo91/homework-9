//Write classes: Person, Student, Staff.
//Person should have: firstName, lastName, gender, age.
//It should have appropriate getters and setters.
//It should have a method: toString().
//Student is inherited from Person. It should have program(array of strings), year, fee.
//It should have appropriate getters and setters. 
//It should have method: passExam(program, grade). Student should contain the data about its programs and exams.
//passExam will update that data, so if student passed all the exams(grade is great or equal to 50),
//its year should be increased by one.
//It should have a toString method.
//Teacher is inherited from Person. It should have program(string), pay.
//It should have appropriate getters and setters. 
//It should have a toString method.

class Person {
  constructor(firstName, lastName, gender, age){
    this._firstName = firstName;
    this._lastName = lastName;
    this._gender = gender;
    this._age = age;
  }
  get firstName(){
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }
  get lastName(){
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  get gender(){
    return this._gender;
  }
  set gender(value) {
    this._gender = value;
  }
  get age(){
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  toString(){
    return `firstName: ${this.firstName}, lastName: ${this.lastName}, gender: ${this.gender}, age: ${this.age}.`
  }
}

class Student extends Person {
  constructor(firstName, lastName, gender, age, program, year, fee){
    super(...arguments);
    this._program = program;
    this._year = year;
    this._fee = fee;
  }
  get program(){
    return this._program;
  }
  set program([...value]) {
    this._program = this.program.concat([...value]);
  }
  get year(){
    return this._year;
  }
  set year(value) {
    this._year = value;
  }
  get fee(){
    return this._fee;
  }
  set fee(value) {
    this._fee = value;
  }
  data = {
    program: program,
    grade: 0,
  }
  passExam(program, grade){
    if (grade >= 50) {
      this.data = {
        program: program,
        grade: grade,
      };
      this.year++;
    } else {
        this.data = 'Goodbye!';
    }
  }
  toString(){
    return `${super.toString()}, program: ${this.program}, year: ${this.year}, fee: ${this.fee}.`
  }
}

class Teacher extends Person {
  constructor(firstName, lastName, gender, age, program, pay){
    super(...arguments);
    this._program = program;
    this._pay = pay;
  }
  get program(){
    return this._program;
  }
  set program(value) {
    this._program = value;
  }
  get pay(){
    return this._pay;
  }
  set pay(value) {
    this._pay = value;
  }
  toString(){
    return `${super.toString()}, program: ${this.program}, pay: ${this.pay}.`
  }
}
