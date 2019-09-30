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
    this.name = name;
    this.email = email;
    this.gender = gender;
  }
  toString(){
    return `name: ${this.name}, email: ${this.email}, gender: ${this.gender}.`
  }
}
class Book extends Author {
  constructor(name, email, gender, title, price, quantity){
    super(...arguments);
    this.title = title;
    this.author = this.name;
    this.price = price;
    this.quantity = quantity;
  }
  toString(){
      return `name: ${this.name}, email: ${this.email}, gender: ${this.gender}, title: ${this.title},
      author: ${this.name}, price: ${this.price}, quantity: ${this.quantity}.`
    }
  getProfit () {
    return this.price * this.quantity;
  }
}
let author = new Author ('Hovo', 'asd@gmail.com', 'male');
let book1 = new Book('Hovo', 'asd@gmail.com', 'male', 'Good book', 15, 65);

console.log(book1);
console.log(book1.getProfit());
console.log(book1.toString());
console.log(author);
console.log(author.toString());
