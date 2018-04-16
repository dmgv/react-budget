//
//
// Object Destructuring
//
//
//

const person = {
  name: "Diego",
  age: 35,
  location: {
    city: "Contagem",
    temp: 25
  }
};

const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}

const book = {
  title: "Ego id the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Peguin"
  }
};

const { name: publisherName = "Self-Plubished" } = book.publisher;
console.log(publisherName);

//
//
// Array Destructuring
//
//
//

const address = ["292 R Silencio", "Contagem", "Minas Gerais", "32025000"];
const [street, city, state, zip] = address;
console.log(`You are on ${city} ${state}. `);
