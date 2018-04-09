export function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        name = "mundo";
        return "\u00A1Hola" + " " + name + "!";
    }
    return "Hello" + " " + name + "!";
}
