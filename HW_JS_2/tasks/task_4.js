// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому  вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає  укорочену версію.


function formatString(string) {
    if (string.length <= 40) {
        return string
    } else {
        let res = string.slice(0, 41) + " ..."
        return res
    }

}



console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
