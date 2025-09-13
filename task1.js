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

let price = +prompt("Введите доход");
let range = prompt("Введите время (day/week/month)");

price = price.toLocaleString("ru", {
    style: "currency",
    currency: "rub",
    });

const result = `${price} в ${range}`;

console.log(result);