// Create an Account class. Account should have: id, name, balance.
//It should have setters for name and balance, and getters for all fields.
//It should have a method: credit(amount), which should add amount to balance and return the updated balance.
//It should have a method: debit(amount), which should subtract the amount from the balance, if amount is less than the balance,
//otherwise output “Amount exceeded balance.”
//It should have a method: transferTo(anotherAccount, amount): which should subtract the amount from the account
//balance and add it to the given anotherAccount
//and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
//It should have a static method: identifyAccounts(accountFirst, accountSecond) which gets two accounts and identifies if they
//are the same or not comparing all fields.
//It should have toString method.

class Account {
  constructor(id, name, balance){
    this._id = id;
    this._name = name;
    this._balance = balance;
  }
  get name(){
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get balance(){
    return this._balance;
  }
  set balance(value) {
    this._balance = value;
  }
  get id(){
    return this._id;
  }
  credit(amount) {
    this.balance = amount + this.balance
    return this.balance;
  }
  debit(amount) {
    if (this.balance < amount) {
      return amount - this.balance;
    }
    return 'Amount exceeded balance.';
  }
  transferTo(anotherAccount, amount) {
    if (this.balance < amount) {
      let newAmount = amount - this.balance;
      return anotherAccount.balance + newAmount;
    }
    return 'Amount exceeded balance.';
  }
  static identifyAccounts(accountFirst, accountSecond) {
    if (accountFirst.id === accountSecond.id || accountFirst.name === accountSecond.name 
    && accountFirst.balance === accountSecond.balance) {
      return "Enter new values";
    }
    return "Ok!!!";
  }
  toString(){
    return `id: ${this.id}, name: ${this.name}, balance: ${this.balance}.`
  }
}
