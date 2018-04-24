const worldInDifferentLanguages = {
    "English": "world",
    "Russian": "мир",
    "Spanish": "mundo",
    "Greek": "κόσμος",
    "Dutch": "wereld",
    "French": "monde"
};

const helloInDifferentLanguages = {
    "English": "Hello",
    "Russian": "Привет",
    "Spanish": "¡Hola",
    "Greek": "γειά σου",
    "Dutch": "Hallo",
    "French": "Bonjour" 
};

export function makeGreeter(language) {
    return function (name = worldInDifferentLanguages[language]) {
        return helloInDifferentLanguages[language] + " " + name + "!";
    };
}
