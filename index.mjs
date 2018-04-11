const dictionary = [
    {
        language: "English",
        world: "world"
    },
    {
        language: "Spanish",
        world: "mundo"
    },
    {
        language: "Russian",
        world: "мир"
    }
];

export function makeGreeter(language) {
    if (language === "Russian") {
        return function (name = dictionary[2].world) {
            return "Привет " + name + "!";
        };
    }
    if (language === "Spanish") {
        return function (name = dictionary[1].world) {
            return "\u00A1Hola" + " " + name + "!";
        };
    }
    return function (name = dictionary[0].world) {
        return "Hello " + name + "!";
    };
}
