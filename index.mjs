const worldInDifferentLanguages = {
    "English": "world",
    "Russian": "мир",
    "Spanish": "mundo"
};

const helloInDifferentLanguages = {
    "English": "Hello",
    "Russian": "Привет",
    "Spanish": "¡Hola"
};

export function makeGreeter(language) {
    return function (name = worldInDifferentLanguages[language]) {
        return helloInDifferentLanguages[language] + " " + name + "!";
    };
}
