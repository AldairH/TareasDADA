/**
 * palindromo
 * 
 * @param {number} num El número entero a verificar.
 * @returns {boolean} Verdadero si el número es un palíndromo, falso en caso contrario.
 */
function palindromo(num) {
    if (num <= 0) {
        return false; 
    }

    let original = num;  
    let revertido = 0;

    while (num > 0) {
        let digito = num % 10; 
        revertido = revertido * 10 + digito;  
        num = Math.floor(num / 10);  //Math.floor se utiliza para redondear hacia abajo y así obtener el numero entero
    }

    return original === revertido; 
}

// Ejemplos de uso:
console.log(palindromo(12321));  // true
console.log(palindromo(-121));   // false
console.log(palindromo(10));     // false
console.log(palindromo(1221));   // true
console.log(palindromo(0));      // false
console.log(palindromo(1551));      // true
