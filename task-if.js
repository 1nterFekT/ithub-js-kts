// const fontType = 'monospace'

// let message;

// if (fontType === "serif") {
//     message = "Выбран шрифт Times"
// } else if (fontType === "sans-serif") {
//     message = "Выбран шрифт Arial"
// } else if (fontType === "monospace") {
//     message = "Выбран шрифт Consolas"
// }

// console.log(message)


// const fontType = 'serif'

// let message;

// switch (fontType) {
//     case 'serif':
//         message = "Выбран шрифт Times"
//         break;
//     case 'sans-serif':
//         message = "Выбран шрифт Arial"
//         break;
//     case 'monospace':
//         message = "Выбран шрифт Consolas"
//         break;
//     default:
//         message = "Такого типа нет"
// }

// console.log(message)


const role = 'user'
let permissions = ['read']

switch (role) {
    case 'admin':
        permissions.push('execute')
    case 'user':
        permissions.push('write')
}

console.log(permissions)