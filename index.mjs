export function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        if (name === "world" || name === "") {
            const world = "mundo";
            return "\u00A1Hola" + " " + world + "!";
        }
        return "\u00A1" + "Hola" + " " + name + "!";
    }
    return "Hello" + " " + name + "!";
}
