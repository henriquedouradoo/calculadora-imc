/* Função cálculo de IMC */

export function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

/* Função isNaN */

export function notANumber(value) {
    return isNaN(value) || value == ""
}

