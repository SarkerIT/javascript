class Owner {
  ownerName = "Old Owner";
  ownerAge = 23;

  ownerInfo() {
    console.log(`Owner name: ${this.ownerName}. Owner age ${this.ownerAge}`);
  }
}

class Animal extends Owner {
  name;
  color;

  constructor(petName, petColor, oName, oAge) {
    super(oName, oAge);
    this.name = petName;
    this.color = petColor;
  }

  showInfo() {
    console.log(`pet name: ${this.name}. pet color age ${this.color}`);
  }
}

const cat = new Animal("Travis", "Black");

cat.showInfo();
cat.ownerInfo();
