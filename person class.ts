class Person {
    private firstName: string;
    private lastName: string;
    private age: number;
    private address: string;
    private phoneNumber: string;
    private email: string;
  
    constructor(firstName: string, lastName: string, age: number, address: string, phoneNumber: string, email: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
  
    getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getDetails(): string {
      return `Name: ${this.getFullName()}, Age: ${this.age}, Address: ${this.address}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
  }
  
  // Example usage:
  const person = new Person("John", "Doe", 30, "123 Main St", "555-555-5555", "john.doe@example.com");
  console.log(person.getDetails());
  