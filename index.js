// // code solution here
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
 
//   sayHello() {
//     console.log("Hello, my name is "+ this.name);
//   }
// }
 
// var sarah = new User("Sarah", "sarah@aol.com");
// sarah.sayHello();

class President {
	constructor(name, politicalParty, yearsInOffice, homeState) {
		this.name = name
		this.politicalParty = politicalParty
		this.yearsInOffice = yearsInOffice
		this.homeState = homeState
	}

	veto() {
		return 'NO!'
	}

	passBill() {
		return 'You can do that!'
	}

	doCharity() {
		return 'I like to help people.'
	}

	conductPressInterview() {
		return 'I am proud to be an American.'
	}

	sayHi() {
		return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`
	}
}