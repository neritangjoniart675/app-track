/* 
Filename: ComplexCodeExample.js
Description: This complex code example demonstrates a sophisticated solution for a banking system, implementing various functionalities such as user management, account transactions, and bank reports.

Please note that this is a simplified demonstration, and some parts may be omitted or abstracted for the sake of brevity.
*/

// User class representing a bank customer
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.accounts = [];
  }

  addAccount(account) {
    this.accounts.push(account);
  }
  
  removeAccount(account) {
    const index = this.accounts.findIndex(acc => acc === account);
    if (index !== -1) {
      this.accounts.splice(index, 1);
    }
  }
  
  getAccountsBalance() {
    let totalBalance = 0;
    this.accounts.forEach(account => {
      totalBalance += account.balance;
    });
    return totalBalance;
  }
}

// Account class representing a bank account
class Account {
  constructor(accountNumber, accountType, balance = 0) {
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      type: 'DEPOSIT',
      amount: amount,
      timestamp: new Date()
    });
  }
  
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient funds.');
      return;
    }
    this.balance -= amount;
    this.transactions.push({
      type: 'WITHDRAW',
      amount: amount,
      timestamp: new Date()
    });
  }
}

// Bank class managing users and accounts
class Bank {
  constructor() {
    this.users = [];
  }

  registerUser(name, email, password) {
    const user = new User(name, email, password);
    this.users.push(user);
    return user;
  }

  loginUser(email, password) {
    const user = this.users.find(user => user.email === email);
    if (!user || user.password !== password) {
      console.log('Invalid email or password.');
      return;
    }
    console.log(`Logged in successfully as ${user.name}.`);
    return user;
  }

  generateBankReport() {
    console.log('Bank Report:');
    this.users.forEach(user => {
      console.log(`Customer: ${user.name}`);
      user.accounts.forEach(account => {
        console.log(`Account Number: ${account.accountNumber}`);
        console.log(`Account Type: ${account.accountType}`);
        console.log(`Balance: ${account.balance}`);
        console.log('---');
      });
      console.log(`Total Balance: ${user.getAccountsBalance()}`);
      console.log('===========');
    });
  }
}

// Example Usage
const bank = new Bank();

const john = bank.registerUser('John Doe', 'john@example.com', 'password123');
const jane = bank.registerUser('Jane Smith', 'jane@example.com', 'password456');

const johnSavings = new Account('JB123', 'Savings', 1000);
john.addAccount(johnSavings);
johnSavings.deposit(500);
johnSavings.withdraw(200);

const janeChecking = new Account('JC456', 'Checking', 5000);
jane.addAccount(janeChecking);
janeChecking.deposit(1000);
janeChecking.withdraw(300);

bank.generateBankReport();

// The code above demonstrates a complex banking system with user management, account operations, and reporting functionalities.