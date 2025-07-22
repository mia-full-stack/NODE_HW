// Задание 1
// Абстрактный класс Animal

console.log("Задание 1");

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

const animals: Animal[] = [new Dog(), new Cat(), new Cat(), new Dog()];

animals.forEach((animal) => console.log(animal.makeSound()));

// Задание 2
// Абстрактный класс Shape с цветом
console.log("Задание 2");

abstract class Shape {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    super("Colored Circle");
    this.radius = radius;
    this.color = color;
  }

  calculateArea(): number {
    return Math.floor(Math.PI * this.radius ** 2);
  }
}

class ColoredRectangle extends ColoredShape {
  width: number;
  height: number;
  color: string;

  constructor(width: number, height: number, color: string) {
    super("Colored Rectangle");
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const myCircle = new ColoredCircle(5, "red");
console.log(
  `${myCircle.name} - Area: ${myCircle.calculateArea()}, color: ${
    myCircle.color
  }`
);

const myRectangle = new ColoredRectangle(3, 4, "violet");
console.log(
  `${myRectangle.name} - Area: ${myRectangle.calculateArea()}, color: ${
    myRectangle.color
  }`
);

// Задание 3
// Абстрактный класс Appliance
console.log("Задание 3");

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("The Washing Machine turns on");
  }
  turnOff(): void {
    console.log("The Washing Machine turns off");
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("The Refrigerator turns on");
  }
  turnOff(): void {
    console.log("The Refrigerator turns off");
  }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliances.forEach((appliance) => {
  appliance.turnOn();
  appliance.turnOff();
});

// Задание 4
// Абстрактный класс Account
console.log("Задание 4");

abstract class Account {
  protected balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  abstract deposit(amount: number): number;
  abstract withdraw(amount: number): number;

  getBalance(): number {
    return this.balance;
  }
}

class SavingsAccount extends Account {
  private interestRate: number;

  constructor(balance: number, interestRate: number) {
    super(balance);
    this.interestRate = interestRate;
  }

  deposit(amount: number): number {
    this.balance += amount;
    console.log(
      `Account replenished with the amount of ${amount}. \n Balance: ${this.getBalance()}`
    );
    return this.getBalance();
  }

  withdraw(amount: number): number {
    if (amount > this.balance) {
      console.log("There are insufficient funds in the account");
      return this.getBalance();
    }
    this.balance -= amount;
    console.log(
      `Withdrawn funds in the amount ${amount}. \n Balance: ${this.getBalance()}`
    );
    return this.getBalance();
  }

  accrualOfInterest(): number {
    const interest = (this.getBalance() * this.interestRate) / 100;
    this.balance += interest;
    console.log(
      `Accrued interest in the amount ${interest}. \n Balance: ${this.getBalance()}`
    );
    return this.getBalance();
  }
}

class CheckingAccount extends Account {
  private commission: number;

  constructor(balance: number, commission: number) {
    super(balance);
    this.commission = commission;
  }

  deposit(amount: number): number {
    this.balance += amount;
    console.log(
      `Account replenished with the amount of ${amount}. \n Balance: ${this.getBalance()}`
    );
    return this.getBalance();
  }
  withdraw(amount: number): number {
    const amountWithCommission = amount + (amount * this.commission) / 100;
    if (amountWithCommission > this.balance) {
      console.log("There are insufficient funds in the account");
      return this.getBalance();
    }
    this.balance -= amountWithCommission;
    console.log(
      `Withdrawn funds in the amount ${amount}, Commission: ${
        (amount * this.commission) / 100
      } \n Balance: ${this.getBalance()}`
    );
    return this.getBalance();
  }
}

const mySavingsAccount = new SavingsAccount(2000, 12);
mySavingsAccount.deposit(1000);
mySavingsAccount.withdraw(100);
mySavingsAccount.accrualOfInterest();

const myCheckingAccount = new CheckingAccount(1500, 1);
myCheckingAccount.deposit(200);
myCheckingAccount.withdraw(150);

// Задание 5
// Абстрактный класс Media
console.log("Задание 5");

abstract class Media {
  abstract play(): void;
}

class myAudio extends Media {
  play(): void {
    console.log("Playing audio");
  }
}

class myVideo extends Media {
  play(): void {
    console.log("Playing video");
  }
}

const myMedia: Media[] = [new myAudio(), new myVideo()];
myMedia.forEach((item) => item.play());
