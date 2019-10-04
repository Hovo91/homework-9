// 1.	Create an Author class and a Book class.
//Author should have: name, email, gender. 
//It should have appropriate getters and setters.
//It should have a toString method.

//Book should have: title, author(Author), price, quantity.
//It should have appropriate getters and setters.
//It should have a method: getProfit(), which calculates the profit from the book based on the price and quantity.
//It should have a toString method.

class Author {
  constructor(name, email, gender){
    this._name = name;
    this._email = email;
    this._gender = gender;
  }
  get name(){
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get email(){
    return this._email;
  }
  set email(value) {
    this._email = value;
  }
  get gender(){
    return this._gender;
  }
  set gender(value) {
    this._gender = value;
  }
  toString(){
    return `name: ${this.name}, email: ${this.email}, gender: ${this.gender}.`
  }
}
class Book {
  constructor(name, email, gender, title, author, price, quantity){
    super(...arguments);
    this._title = title;
    this._author = author;
    this._price = price;
    this._quantity = quantity;
  }
  get author(){
    return this._author;
  }
  set author(value) {
    value = new Author();
    this._author = value;
  }
  get title(){
    return this._title;
  }
  set title(value) {
    this._title = value;
  }
  get price(){
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  get quantity(){
    return this._quantity;
  }
  set quantity(value) {
    this._quantity = value;
  }
  toString(){
      return `name: ${this.name}, email: ${this.email}, gender: ${this.gender}, title: ${this.title}, author: ${this.author}, price: ${this.price}, quantity: ${this.quantity}.`
    }
  getProfit () {
    return this.price * this.quantity;
  }
}
