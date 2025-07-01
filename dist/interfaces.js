"use strict";
var _a, _b, _c;
function sayHello() {
    console.log("Hello");
}
//deklarera objekt med interfacet Pokemon som typ
const bulbasaur = {
    name: "Bulbasaur",
    type: ["grass"],
    id: 1,
    inPokeDex: false,
    nickname: "Bulby",
    makesound: () => "cute sound",
    fight: () => {
        console.log("Bulbasaur used.... blabla, very effective");
    },
    details: {
        description: "blue and green and cute",
        height: 30,
        image: "bla.png"
    }
};
console.log((_a = bulbasaur === null || bulbasaur === void 0 ? void 0 : bulbasaur.details) === null || _a === void 0 ? void 0 : _a.image);
const gengar = {
    name: "Gengar",
    type: ["ghost", "poison"],
    id: 94,
    inPokeDex: true,
    makesound: () => "bu"
};
(_b = bulbasaur.fight) === null || _b === void 0 ? void 0 : _b.call(bulbasaur); // metoden finns och kallas på
(_c = gengar.fight) === null || _c === void 0 ? void 0 : _c.call(gengar); // här finns inte metoden, men det ger oss inte fel
console.log(bulbasaur.name);
bulbasaur.type.push("ground");
bulbasaur.isCute = false;
console.log(gengar.isCute);
console.log(bulbasaur);
console.log(bulbasaur.makesound());
//# sourceMappingURL=interfaces.js.map