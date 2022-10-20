////////////////////////////////////////////////////////////////////////////- [ PRACTICE 1 (GOVERNOR) ]
//// as simple as it gets. Nothing special going on here.

class Governor {
    constructor(name, state, affiliation) {
        this.name = name;
        this.state = state;
        this.affiliation = affiliation;
        this.age;
    }

    passBill() { // Why use static here?
        if(this.affiliation === "Republican") {
            console.log("The bill was passed! The Democrats aren't going to like this...")
            return this;
        }
        else {
            console.log("The bill was passed! You know the Republicans are furious right now...")
            return this;
        }
    }
}
let GovCO = new Governor('Jared Polis', 'Colorado', 'Democrat');
let GovTX = new Governor('Greg Abbott', 'Texas', 'Republican');

GovCO.age = 47; // Added onto array
GovTX.age = 64;

GovCO.passBill() // This is so fun!
GovTX.passBill();
console.log(GovCO);
console.log(GovTX);

////////////////////////////////////////////////////////////////////////////- [ PRACTICE 2 (INHERITANCE) ]
//// this is where things get interesting. You'll need to play around with the makeshift "game" to continue.
//// characters have been created towards the bottom of each class.

class Person {
    constructor(firstName, lastName, age, hairColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = undefined;
        this.hairColor = hairColor;
        this.hungerLevel = 100;

    }

    satisfyHunger() {
        this.hungerLevel = prompt("On a scale from 0-100, How hungry are you?");
        if(this.hungerLevel <= 20 && this.hungerLevel > 1 ) {
            console.log("You're starving and eat a delicious bowl of tomato soup.")
            console.log("Keep going... you're STARVING!")
        }
        else if (this.hungerLevel <= 50 && this.hungerLevel > 20 ) {
            console.log("Your belly rumbles as you scarf down a dripping glazed donut.")
            console.log("However, you're still hungry! Eat up!")
        }
        else if (this.hungerLevel <= 99 && this.hungerLevel > 50 ) {
            console.log("You gracefully eat a small bag of potato chips.")
            console.log("A small inner voice says, " + `But ${this.firstName}, I'm still hungry...`)
        }
        else if (this.hungerLevel == 100) {
            console.log("You're not hungry right now.")
            console.log("Maybe you should call it a night and go to sleep...")
        }
        else if (this.hungerLevel > 100 ) {
            console.log("You've satisfied your hunger... maybe a little too much...")
            this.useRestroom(); //sometimes you gotta do what you gotta do...
            this.hungerLevel = 21; //reset for more fun
        }
    }

    useRestroom() {
        console.log("Oh no! The food you've eaten gave you a stomach ache! Run!")
    }

    gotoSleep() {
        if(this.hungerLevel <= 21) {
            console.log("You're too hungry to sleep. Eat some food first.")
        }
        else if (this.hungerLevel >= 22) {
            console.log("Yawn! You find yourself slipping into a deep sleep...")
        }
    }
}


//// THIS IS THE CHARACTER FOR THE ABOVE CODE
let person1 = new Person('Charles', 'Knapp', 23, 'DirtyBlonde')
////

class PostalWorker extends Person {
    constructor(firstName, lastName, age, hairColor, mailCapacity, deliveredMail){
        super(firstName, lastName, age, hairColor)
        this.mailCapacity = 25;
        this.deliveredMail = undefined;
    }
    
    deliverMail() {
        let deliveredMail = prompt("Choose the amount of mail you'd like to deliver");
        if (this.mailCapacity >= deliveredMail) {
            console.log(`You placed ${deliveredMail} items into the mailbox.`)
            let mailCapacity = (this.mailCapacity -= deliveredMail)
    
            console.log(`You can hold: ${this.mailCapacity} more items`)
        }
        else {
            console.log(`You can't deliver any more items. You head back to collect more!`)
            let mailCapacity = 25;
        }
    }
  }

  class Chef extends Person {
    constructor(firstName, lastName, age, hairColor, knownReceipes, cookingEXP) {
        super(firstName, lastName, age, hairColor)
        this.knownReceipes = ['Creamy Tomato Basil Soup', 'Peking Duck', 'Apfelstrudel'];
        this.cookingEXP = 10;
    }
    
    learnReceipe() {
        let learnedReceipe = prompt("Tell me, what do you want to learn?")
        this.knownReceipes.unshift(learnedReceipe);
        console.log(`You learned: ${learnedReceipe} and earned +10 cooking Experience.`)
        this.cookingEXP = this.cookingEXP += 10;
        console.log(`You now have a total of ${this.cookingEXP}.`)
    }
  }


  //// THESE ARE THE CHARACTERS FOR THE ABOVE CODE
  let postalWorker1 = new PostalWorker('Jason', 'Puttman', 47, 'Nrown')
  let chef1 = new Chef('Brian','Tutt', 30, 'Red')
  ////