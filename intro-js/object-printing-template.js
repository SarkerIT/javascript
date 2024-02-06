const myFrog = {
  animalType: "animal",
  englishName: "american toad",
  scientificName: "Anaxyrus americanas",
  food: "insect",
  distribution: "34 states",
};

myFrog.color = "red";
// const printDetails =
//   "I am working with an " +
//   myFrog.animalType +
//   ". It is " +
//   myFrog.englishName +
//   ". " +
//   "The scientific name is " +
//   myFrog.scientificName +
//   ".";

const printDetails = `I am working with ${myFrog.animalType}. It is called ${myFrog.englishName}. The scientific name is ${myFrog.scientificName}. It is found in ${myFrog.distribution}. It is ${myFrog.color} in color.`;

console.log(printDetails);
