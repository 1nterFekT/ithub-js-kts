/**
 * В программе объявлены две переменные — price и range.
 * Переменная range может принимать одно из трех строковых значений — month/day/week.
 * Переменная price хранит в себе числовое значение.
 * Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону:
 * <значение price> Р в <эквивалент значения range на русском языке>
 *
 * Пример значений переменных:
 * let price = 10000
 * let range = "day"
 *
 * Пример результата:
 * 10000 Р в день
 */

console.log("---\nTask 1");

let price = +prompt("Введите доход");
let range = prompt("Введите время (day/week/month)");

if (!Number.isFinite(price)) price = "(доход указан неверно)";
else
  price = price.toLocaleString("ru", {
    style: "currency",
    currency: "rub",
  });

if (range === "day") range = "день";
else if (range === "week") range = "неделю";
else if (range === "month") range = "месяц";
else range = "(время указано неверно)";

const result = `${price} в ${range}`;

console.log(result);