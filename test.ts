
enum GuitarType {
    electric = "electric",
    acoustic = "acoustic"
}

type Guitar = {
    strings: number;
    electric: boolean;
};

interface GuitarInterface {
    strings: number;
    guitarType: GuitarType
}
   
// passing custom type into a function
function showGuitarType(guitar: Guitar) {
    console.log(`The guitar has ${guitar.strings} strings.`);
    console.log(`It is an ${guitar.electric ? GuitarType.electric : GuitarType.acoustic} guitar.`);
}
   
showGuitarType({ strings: 7, electric: true });


function useGuitarInterface(g: GuitarInterface) {
    console.log(`The guitar has ${g.strings} strings and is an ${g.guitarType}.`);
}

let guit: GuitarInterface = {
    strings: 12,
    guitarType: GuitarType.acoustic
};

useGuitarInterface(guit);


// param can be one of string array or string (union types)
function acceptsStringAndArray(j: string[] | string) {
    if (Array.isArray(j)) {
      console.log(`${j.join(" and ")}`);
    } else {
      console.log(`${j}`);
    }
}

acceptsStringAndArray(["Crosby", "Stills", "Nash"]);
acceptsStringAndArray("Young");


class GuitarClass {
    private strings: number;

    constructor(strings?: number) {
        this.strings = strings || 6;
    }

    public changeToSeven() {
        this.strings = 7;
    }

    public whatIsIt() {
        console.log(`This guitar has ${this.strings} strings.`);
    }
}

let guitarTest: GuitarClass = new GuitarClass(8);
guitarTest.whatIsIt();
guitarTest.changeToSeven();
guitarTest.whatIsIt();

let guitarTest2: GuitarClass = new GuitarClass(7);

console.log(guitarTest == guitarTest2);
console.log(guitarTest === guitarTest2);



