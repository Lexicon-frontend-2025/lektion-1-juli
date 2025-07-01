// typar objekt mha interface
// nyckelordet, namn, start på objekt, egenskaper med typer
interface Pokemon {
    name: string;
    type: string[];
    id: number;
    inPokeDex: boolean;
    nickname?: string;
    makesound: () => void;
    fight?(): void // optional chaining
    details?: {
        description: string,
        height: number,
        image?: string
    }
}

function sayHello(): void {
    console.log("Hello");
}

// declaration merging
interface Pokemon {
    isCute?: boolean;
}
//extend interface
interface CutePokemon extends Pokemon {
    isNice?: boolean;
}
//deklarera objekt med interfacet Pokemon som typ
const bulbasaur: Pokemon = {
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
}

console.log(bulbasaur?.details?.image);

const gengar: Pokemon = {
    name: "Gengar",
    type: ["ghost", "poison"],
    id: 94,
    inPokeDex: true,
    makesound: () => "bu"
}

bulbasaur.fight?.(); // metoden finns och kallas på
gengar.fight?.(); // här finns inte metoden, men det ger oss inte fel
console.log(bulbasaur.name);
bulbasaur.type.push("ground");
bulbasaur.isCute = false;
console.log(gengar.isCute);

console.log(bulbasaur);
console.log(bulbasaur.makesound());


