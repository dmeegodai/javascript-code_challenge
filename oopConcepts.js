class bankAccount {
  #accountBalance = 0;

  constructor(accountNummer, intialBalance) {
    this.accountNummer = accountNummer;
    this.#accountBalance = intialBalance;
  }

  checkBalance() {
    return `Your bank balance is USD: ${this.#accountBalance}`;
  }

  depositMoney(money) {
    if (money > 0) {
      this.#accountBalance += money;
      return `Deposit success. Your bank balance is USD: ${
        this.#accountBalance
      }`;
    } else {
      return `No deposit done. Your bank balance is USD: ${
        this.#accountBalance
      }`;
    }
  }

  withdrawMoney(money) {
    if (money <= this.#accountBalance && money > 0) {
      this.#accountBalance -= money;
      return `Withdraw success. Your bank balance is USD: ${
        this.#accountBalance
      }`;
    } else {
      return `Sorry you can not withdraw money at this time`;
    }
  }
}

//comBank = new bankAccount(85523445361, 17000);
//console.log(comBank.checkBalance());
//console.log(comBank.depositMoney(100));
//console.log(comBank.withdrawMoney(-30));



class areaCalculator {
#areaValue;

constructor(rValue){
  this.rValue = rValue;
}

get areaCal() {
  return this.#areaValue = 2 * 3.14 * this.rValue;
}

}

//const myCalulation =  new areaCalculator(10);
//console.log(myCalulation.areaCal);


class Vehicle {

  constructor(origin, year) {
    this.origin = origin;
    this.year = year;
  }

  vehicleInfo(){
    console.log(`This vehicle is made in ${this.origin} on ${this.year}`);
  }

}

class Car extends Vehicle {

  constructor(brand, origin, year) {
    super(origin, year);
    this.brand = brand;
  }
   vehicleInfo(){
    console.log(`This car brand is ${this.brand}`);
    super.vehicleInfo();
   }

}

//const myCar = new Car("Dodge", "USA", "1969");
//myCar.vehicleInfo();

class Payment {
  processPayment(amount){
    throw new error("Test line added");
  }
}

class creditCardPayemnt extends Payment{
  processPayment(amount){
    console.log(`Credit Card payment recieved and the amount is ${amount}`);
  }
}

class paypalPayemnt extends Payment{
  processPayment(amount){
    console.log(`Paypal payment recieved and the amount is ${amount}`);
  }
}

class onlinePayemnt extends Payment{
  processPayment(amount){
    console.log(`Online payment recieved and the amount is ${amount}`);
  }
}

const myPayment =  new creditCardPayemnt();
myPayment.processPayment(200);

const myPaymentTwo = new onlinePayemnt();
myPaymentTwo.processPayment(300);


