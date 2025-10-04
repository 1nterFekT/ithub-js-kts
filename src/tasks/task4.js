/**
 * @param {string} word - Слово для проверки
 * @returns {boolean} - Итог проверки
 * @description Проверка слова на палиндром
 */
export function isPalindrome(word) {
    if (word === null) {
        throw new Error("Пользователь отменил ввод");
    }

    if (word.includes(" ")) {
        throw new Error("Введено несколько слов");
    }

    if (!/^[а-яА-Яa-zA-Z]*$/.test(word)) {
        throw new Error("Некорректные входные данные");
    }

    let result = `${word} - палиндром`;
    const lowerCaseWord = word.toLowerCase();
    let leftPoint = 0;
    let rightPoint = word.length - 1;

    if (word.length === 1) {
        result = `${word} - не палиндром`;
    }

    for (leftPoint; leftPoint < word.length / 2; leftPoint++) {
        if (lowerCaseWord[leftPoint] !== lowerCaseWord[rightPoint]) {
            result = `${word} - не палиндром`;
        }
        rightPoint--;
    }

    return result;
}
