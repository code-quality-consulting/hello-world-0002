const worldInDifferentLanguages = {
    "English": "world",
    "Russian": "мир",
    "Spanish": "mundo",
    "Greek": "κόσμος",
    "Dutch": "wereld"
};

const helloInDifferentLanguages = {
    "English": "Hello",
    "Russian": "Привет",
    "Spanish": "¡Hola",
    "Greek": "γειά σου",
    "Dutch": "Hallo"
};

export function makeGreeter(language) {
    return function (name = worldInDifferentLanguages[language]) {
        return helloInDifferentLanguages[language] + " " + name + "!";
    };
}
