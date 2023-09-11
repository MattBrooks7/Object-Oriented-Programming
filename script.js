class Player {
    age = 20;
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
        // this.age = 20;
    }
    speak(phrase) {
        console.log(`${this.name} says "${phrase}"`);
    }
}


const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);

hanSolo.speak("Never tell me the odds!");
hanSolo.age = 50;

console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));

const nader = new Player("Nader", 10, 5, ["Computer"]);

// nader.speak("Monkeys are the best animal!!");

// console.log(nader);
// console.log(Object.getOwnPropertyNames(nader));
// console.log(Object.getOwnPropertyNames(nader.__proto__));

function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
    }

AnotherPlayer.prototype.speak = function (phrase) {
    console.log(`${this.name} says: ${phrase}`);
}

const darthVarder = new AnotherPlayer("Darth Vader", 200, 50, ["Lightsaber"]);

console.log(darthVarder);
darthVarder.speak("Hshfsfiihhhh")
console.log(Object.getOwnPropertyNames(darthVarder));
console.log(Object.getOwnPropertyNames(darthVarder.__proto__));




//=================================================================
// BETTER CODE
// const createPlayer = (name, hp, mp, items) => {
//     return {
//         name: name,
//         hp: hp,
//         mp: mp,
//         items: items
//     }
// }

// const hanSolo = createPlayer("Han Solo", 100, 10, ["Blaster"])
// console.log(hanSolo);
// const darthVarder = createPlayer("Darth Vader", 200, 50, ["Lightsaber"]);
// console.log(darthVarder)


//=================================================================
// BAD CODE
// const player = {
//     name: "?",
//     hp: 100,
//     mp: 0,
//     items: []
// };

// const hanSolo = player;
// hanSolo.name = "Han Solo";
// hanSolo.hp = 80;
// hanSolo.mp = 20;
// hanSolo.items = ["Blaster"];


// const darthVarder = player;


// console.log(hanSolo);
// console.log(darthVarder);