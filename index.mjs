export function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        if (name === "") {
            const world = "mundo";
            return "\u00A1Hola" + " " + world + "!";
        }
        return "\u00A1" + "Hola" + " " + name + "!";
    }
    return "Hello" + " " + name + "!";
}

export function makeGreeter(language) {
    if (language === "Spanish") {
        return function () {
           return "\u00A1Hola" + " " + "mundo" + "!";
        };
    }
    return function (name = "world") {
        return "Hello " + name + "!";
    };
}
