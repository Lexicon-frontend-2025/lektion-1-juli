// typar objekt mha interface
// nyckelordet, namn, start på objekt, egenskaper med typer
interface Pokemon {
    name: string;
    type: string[];
    id: number;
    inPokeDex: boolean;
    nickname?: string;
    rawr: () => void;
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
    rawr: () => "cute sound"
}

console.log(bulbasaur.name);
bulbasaur.type.push("ground");
bulbasaur.isCute = false;
console.log(bulbasaur);
console.log(bulbasaur.rawr());


