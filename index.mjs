export function makeGreeting(name = "world", language) {
    if (language === "Spanish") {
        name = "mundo";
        return "\u00A1Hola" + " " + name + "!";
    }
    return "Hello" + " " + name + "!";
}
