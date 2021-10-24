class Person {
    constructor(personName, personAge, personGender) {
        this.personName = personName,
        this.personAge = personAge,
        this.personGender = personGender,
        this.fn = () => {
            console.log("This is a function inside a contructor!!")
        }
    }

    publicMethod(person) {
        return Person.getPersonData(person)
    }

    /**
     * By default the methods are public
     * It can be accessed by members of same class
     * or by one who inherits this class
     */
    getPersonDataPublic() {
        return `Name is ${this.personName}. Age is ${this.personAge}. Gender is ${this.personGender}`
    }

    /**
     * Private method
     * It can be accessed by members of the same class
     */
    static getPersonData(person) {
        return `Name is ${person.personName}. Age is ${person.personAge}. Gender is ${person.personGender}`
    }

}

class Team extends Person {
    constructor(personName, personAge, personGender, sportsName, teamName) {
        super(personName, personAge, personGender)
        this.sportsName = sportsName;
        this.teamName = teamName
    }
    getPlayerDetails() {
        return `${super.getPersonDataPublic()}. Sports name is ${this.sportsName}. Plays for ${this.teamName}`
    }
    getStaticMehod(person) {
        Person.getPersonData(person)
    }
}



const person = new Person("John", "24", "Male");
person.__proto__.newFn = function() {
    return "New function using proto"
}
console.log(person.getPersonDataPublic());
console.log(person.newFn());
console.log(person.publicMethod(person));
console.log(Person.getPersonData(person))
const team = new Team("John", "24", "Male", "Football", "Real Madrid")
console.log(team.getPlayerDetails())
console.log(team.getStaticMehod(person)) // Error or undefined
