var GuitarType;
(function (GuitarType) {
    GuitarType["electric"] = "electric";
    GuitarType["acoustic"] = "acoustic";
})(GuitarType || (GuitarType = {}));
// passing custom type into a function
function showGuitarType(guitar) {
    console.log("The guitar has ".concat(guitar.strings, " strings."));
    console.log("It is an ".concat(guitar.electric ? GuitarType.electric : GuitarType.acoustic, " guitar."));
}
showGuitarType({ strings: 7, electric: true });
function useGuitarInterface(g) {
    console.log("The guitar has ".concat(g.strings, " strings and is an ").concat(g.guitarType, "."));
}
var guit = {
    strings: 12,
    guitarType: GuitarType.acoustic
};
useGuitarInterface(guit);
// param can be one of string array or string (union types)
function acceptsStringAndArray(j) {
    if (Array.isArray(j)) {
        console.log("".concat(j.join(" and ")));
    }
    else {
        console.log("".concat(j));
    }
}
acceptsStringAndArray(["Crosby", "Stills", "Nash"]);
acceptsStringAndArray("Young");
var GuitarClass = /** @class */ (function () {
    function GuitarClass(strings) {
        this.strings = strings || 6;
    }
    GuitarClass.prototype.changeToSeven = function () {
        this.strings = 7;
    };
    GuitarClass.prototype.whatIsIt = function () {
        console.log("This guitar has ".concat(this.strings, " strings."));
    };
    return GuitarClass;
}());
var guitarTest = new GuitarClass(8);
guitarTest.whatIsIt();
guitarTest.changeToSeven();
guitarTest.whatIsIt();
var guitarTest2 = new GuitarClass(7);
console.log(guitarTest == guitarTest2);
console.log(guitarTest === guitarTest2);
