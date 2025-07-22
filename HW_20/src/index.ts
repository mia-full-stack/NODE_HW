// Задание 1: Класс Animal и его наследник Dog

class Animal {
  name: string
  species: string

  constructor(name: string, species: string) {
    this.name = name
    this.species = species
  }

  sound(): void {
    console.log("The animal makes a sound")
  }

  getInfo(): string {
    return `${this.name} is a ${this.species}`
  }
}

class Dog extends Animal {
  breed: string

  constructor(name: string, breed: string) {
    super(name, "Dog") 
    this.breed = breed
  }

  sound(): void {
    console.log("The dog barks")
  }

  getBreedInfo(): string {
    return `${this.name} is a ${this.breed}`
  }
}

console.log("=== Задание 1: Animal и Dog ===")

const genericAnimal = new Animal("Fluffy", "Cat")
console.log(genericAnimal.getInfo()) 
genericAnimal.sound()

const myDog = new Dog("Buddy", "Golden Retriever")
console.log(myDog.getInfo())
console.log(myDog.getBreedInfo())
myDog.sound()

// Задание 2: Статическое свойство для учета всех книг

class Library {
  static totalBooks = 0;

  private books: string[] = []
  libraryName: string

  constructor(libraryName: string) {
    this.libraryName = libraryName
  }

  addBook(bookTitle: string): void {
    this.books.push(bookTitle)
    Library.totalBooks++ 
    console.log(`Book "${bookTitle}" added to ${this.libraryName}`)
    console.log(`Total books across all libraries: ${Library.totalBooks}`)
  }

  getBooks(): string[] {
    return [...this.books]
  }

  static getTotalBooks(): number {
    return Library.totalBooks
  }

  getLocalBookCount(): number {
    return this.books.length
  }
}
console.log("\n=== Задание 2: Library со статическими свойствами ===")

const centralLibrary = new Library("Central Library")
const schoolLibrary = new Library("School Library")
const homeLibrary = new Library("Home Library")

console.log(`Initial total books: ${Library.getTotalBooks()}`) // 0

centralLibrary.addBook("1984")
centralLibrary.addBook("To Kill a Mockingbird")

schoolLibrary.addBook("Mathematics Textbook")
schoolLibrary.addBook("History of Science")

homeLibrary.addBook("Cooking Recipes")

console.log(`\nFinal statistics:`)
console.log(`Central Library has ${centralLibrary.getLocalBookCount()} books`)
console.log(`School Library has ${schoolLibrary.getLocalBookCount()} books`)
console.log(`Home Library has ${homeLibrary.getLocalBookCount()} books`)
console.log(`Total books across all libraries: ${Library.getTotalBooks()}`)


// Задание 3: Переопределение конструктора в классе Vehicle

class Vehicle {
  make: string
  model: string

  constructor(make: string, model: string) {
    this.make = make
    this.model = model
  }

  getVehicleInfo(): string {
    return `${this.make} ${this.model}`
  }

  start(): void {
    console.log(`${this.getVehicleInfo()} is starting...`)
  }
}

class Motorcycle extends Vehicle {
  type: string

  constructor(make: string, model: string, type: string) {
    super(make, model)
    this.type = type
  }

  getVehicleInfo(): string {
    return `${this.make} ${this.model} (${this.type})`
  }

  wheelie(): void {
    console.log(`${this.getVehicleInfo()} is doing a wheelie!`)
  }

  start(): void {
    console.log(`${this.getVehicleInfo()} motorcycle is revving up!`)
  }
}
console.log("\n=== Задание 3: Vehicle и Motorcycle ===")

const genericVehicle = new Vehicle("Toyota", "Camry")
console.log(genericVehicle.getVehicleInfo())
genericVehicle.start()

const myMotorcycle = new Motorcycle("Harley-Davidson", "Street 750", "Cruiser")
console.log(myMotorcycle.getVehicleInfo()) 
myMotorcycle.start()
myMotorcycle.wheelie()

const vehicles: Vehicle[] = [genericVehicle, myMotorcycle]
console.log("\nДемонстрация полиморфизма:")
vehicles.forEach((vehicle) => {
  console.log(`Vehicle: ${vehicle.getVehicleInfo()}`)
  vehicle.start()
})
