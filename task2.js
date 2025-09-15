/**
 * В программе объявлены две переменные — temp и weather.
 * Объявите переменную activity и присвойте ей значение по следующему правилу:
 * если значение переменной temp больше либо равно 25 a переменная weather имеет значение "clear", тогда значение переменной activity должно быть "golf";
 * если значение переменной temp от 10 до 24 включительно или weather имеет значение "cloudy", тогда значение переменной activity должно быть "bowling";
 * в ином случае значение переменной activity должно быть "hiking".
 *
 * Пример значений переменных:
 * let temp = 25
 * let weather = "clear"
 *
 * Пример результата:
 * "golf"
 */

const temp = +prompt("Укажите температуру");
if (!Number.isFinite(temp)) {
    throw new Error("temp указан неверно!")
}

const weather = prompt("Укажите погоду (clear/cloudy)");
if (weather !== "clear" && weather !== "cloudy") {
    throw new Error("weather указан неверно!")
}

let activity;

if (temp >= 10 && temp <= 24 || weather === "cloudy") {
    activity = "bowling"
} else if (temp >= 25 && weather === "clear") {
    activity = "golf"
} else {
    activity = "hiking"
}

console.log(activity);