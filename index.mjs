const worldInDifferentLanguages = {
    "English": "world",
    "Russian": "мир",
    "Spanish": "mundo"
};

export function makeGreeter(language) {
    if (language === "Russian") {
        return function (name = worldInDifferentLanguages.Russian) {
            return "Привет " + name + "!";
        };
    }
    if (language === "Spanish") {
        return function (name = worldInDifferentLanguages.Spanish) {
            return "\u00A1Hola" + " " + name + "!";
        };
    }
    return function (name = worldInDifferentLanguages.English) {
        return "Hello " + name + "!";
    };
}
