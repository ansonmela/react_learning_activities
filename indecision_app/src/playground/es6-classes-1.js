class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}

	 getGreeting() {
	 	return `Hi. I am ${this.name}`;
	 }

	 getDescription() {
	 	return `Hi. ${this.name} is ${this.age}`;
	 }
}


class Student extends Person {
	constructor(name, age, major = 'Swagonometry', location = 'youabitch city') {
		super(name, age);
		this.major = major;
		this.location = location;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}`;
		}

		if (this.getHomeLocation()) {
			description += ` Their location is ${this.location}`;
		}
		return description;
	}

	getHomeLocation() {
		return !!this.location;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}
}

const me = new Student('Anson Melakayil', 25, 'Biology', 'Raleigh');
const other = new Student('Anson tha god', 'infinite', 'Godonomics');
const traveler = new Traveler('Anson', 25);

// console.log(me.getGreeting());


// const other = new Person();
// console.log(other.getGreeting());

console.log(me.getDescription());

console.log(other.getDescription());

console.log(traveler);


