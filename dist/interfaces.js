"use strict";
const bulbasaur = {
    name: "Bulbasaur",
    type: ["grass"],
    id: 1,
    inPokeDex: false,
    nickname: "Bulby",
    rawr: () => "cute sound"
};
console.log(bulbasaur.name);
bulbasaur.type.push("ground");
bulbasaur.isCute = false;
console.log(bulbasaur);
console.log(bulbasaur.rawr());
//# sourceMappingURL=interfaces.js.map