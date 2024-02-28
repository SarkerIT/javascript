const person = {
  name: "GS",
  age: 21,
  phone: "01234567",
  address: "1020 N Victoria blvd, MD 78023",
  grades: [70, 60, 99, 100],
};

// spreading

const newPerson = { ...person };

// console.log(person);
console.log(newPerson);

newPerson.email = "hello@email.com";

// console.log(person);
// console.log(newPerson);

// object destructuring

const { age } = person;
// console.log("age:", age);

const { age: myAge } = person;
// console.log("age:", age);

// console.log("myAge:", myAge);

// entries method

// console.log(Object.entries(person));
// console.log(Object.keys(person));
const [math, science, bio, phy] = [...person.grades];

//put it into an new object
const subjectNumbers = { math, science, bio, phy };
console.log(math, science, bio, phy);

console.log(subjectNumbers);
