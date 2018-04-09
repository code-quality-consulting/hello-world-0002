export function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        const world = "mundo";
        return "\u00A1Hola" + " " + world + "!";
    }
    return "Hello" + " " + name + "!";
}
