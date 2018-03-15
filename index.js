class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }
  veto() {return "NO!";}
  passBill() {return "You can do that!";}
  doCharity() {return "I like to help people.";}
  conductPressInterview() {return "I am proud to be an American.";}
  sayHi() {return `Hi, my name is ${this.name}. I am from ${this.homeState}. I represent the ${this.politicalParty}s, and was in office ${this.yearsInOffice}.`;}
}

var georgeWashington = new President('George Washington', 'N/A', '1789-1797', 'Colonial Virginia');
var abrahamLincoln = new President('Abraham Lincoln', 'Whigs and Rebuplican', '1861-1865', 'Illinois');
var richardNixon = new President('Richard Nixon', 'Rebuplican', '1969-1974', 'N/A');
var jimmyCarter = new President('Jimmy Carter', 'Democrat', '1977-1981', 'Georgia');

/* console.log(georgeWashington.sayHi());
console.log(abrahamLincoln.sayHi());
console.log(richardNixon.sayHi());
console.log(jimmyCarter.sayHi()); */
