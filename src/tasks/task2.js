/**
 * @param {string} userInput - Число
 * @returns {string} Строка с перечислением кратных трём
 * @description Формирование строки с перечислением чисел
 * от 1 до userInput, кратных трём, через запятую с пробелом
 */
export function getMultiplesOfThree(userInput) {
    if (userInput === null) {
        throw new Error("Пользователь отменил ввод");
    }

    const userNumber = Number(userInput);

    if (!Number.isFinite(userNumber)) {
        throw new Error("Некорректные входные данные");
    }

    let result = "";
    let counter = 1;

    while (counter <= userNumber) {
        if (counter % 3 === 0) {
            if (result !== "") {
                result += ", ";
            }
            result += counter;
        }
        counter++;
    }

    return result;
}
