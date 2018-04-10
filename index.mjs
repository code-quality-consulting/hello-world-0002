export function makeGreeter(language) {
    if (language === "Russian") {
        return function () {
            return "Привет мир!";
        }
    }
    if (language === "Spanish") {
        return function (name = "mundo") {
            return "\u00A1Hola" + " " + name + "!";
        };
    }
    return function (name = "world") {
        return "Hello " + name + "!";
    };
}
