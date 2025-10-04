/**
 * @param {string} height - Высота лесенки
 * @returns {string} Строка с отображением лесенки
 * @description Формирование строки с лесенкой заданной длины
 */
export function renderLadder(height) {
    if (height === null) {
        throw new Error("Пользователь отменил ввод");
    }

    const h = Number(height);

    if (!Number.isFinite(h) || h < 0 || h % 1 !== 0) {
        throw new Error("Некорректные входные данные");
    }

    let result = "";

    for (let i = 0; i <= h; i++) {
        if (result !== "") {
            result += "\n";
        }

        for (let j = 1; j <= i; j++) {
            result += j;
        }
    }

    return result;
}
