class Quadrilateral {
  constructor(side1, side2, side3, side4){
    this.side1 = side1
    this.side2 = side2
    this.side3 = side3
    this.side4 = side4
  }

  getPerimeter(){
    return this.side1 + this.side2 + this.side3 + this.side4
  }


}

class Rectangle extends Quadrilateral {

  constructor(width, height){
    super(width, height, width, height)
    this.width = width;
    this.height = height;
  }
  getArea(){
      return this.width * this.height;

  }


}

class Square extends Rectangle {
  constructor(side){
    super(side, side);
    this.side = side;
  }


  getDiagonal() {
    return Math.sqrt(2) * this.side;
}


}

/* Be creative with this one! */
class Person {
  // Private static variable to track all instances of Person
  static #people = [];

  // Private instance variable to track the contacts of a specific Person
  #contacts = [];

  // Constructor method to initialize a new instance of Person
  constructor(firstName, lastName, email) {
    this.firstName = firstName; // Assigns the firstName parameter to the instance
    this.lastName = lastName; // Assigns the lastName parameter to the instance
    this.email = email; // Assigns the email parameter to the instance
    Person.#people.push(this); // Adds the new instance to the static #people array
  }

  // Instance method to get the email of the Person
  getEmail() {
    return this.email; // Returns the email of the instance
  }

  // Instance method to add a contact to the Person's contacts
  addContact(contact) {
    // Checks if the contact object has the required properties
    if (contact && contact.firstName && contact.lastName && contact.email) {
      this.#contacts.push(contact); // Adds the contact to the private #contacts array
      return `${contact.firstName} ${contact.lastName} has been added to your contacts.`; // Returns a confirmation message
    } else {
      return 'Could not add contact.'; // Returns an error message if the contact is invalid
    }
  }

  // Instance method to display the contacts of the Person
  displayContacts() {
    // Checks if there are no contacts
    if (this.#contacts.length === 0) {
      return `${this.getInitials()} has no contacts.`; // Returns a message if there are no contacts
    }
    // Maps the contacts array to a string of contact names
    const contactNames = this.#contacts.map(contact => `${contact.firstName} ${contact.lastName}`).join(', ');
    return `${this.getInitials()}'s contacts: ${contactNames}`; // Returns the list of contact names
  }

  // Instance method to get the initials of the Person
  getInitials() {
    return `${this.firstName[0]}${this.lastName[0]}`; // Returns the initials of the first and last name
  }

  // Static class method to return the list of all Person instances
  static list() {
    return Person.#people; // Returns the private static #people array
  }

  // Static class method to find a Person instance by email
  static findByEmail(email) {
    // Finds and returns the Person instance with the matching email
    return Person.#people.find(person => person.email === email);
  }
}

module.exports = {
  Quadrilateral,
  Rectangle,
  Square,
  Person,
};
