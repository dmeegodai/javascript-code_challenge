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

comBank = new bankAccount(85523445361, 17000);
console.log(comBank.checkBalance());
console.log(comBank.depositMoney(100));
console.log(comBank.withdrawMoney(-30));
