/**
 * sumaParesA
 * 
 * @param {number[][]} A La matriz cuadrada de nxn.
 * @returns {number} La suma de los números pares en la matriz.
 */
function sumaParesA(A) {
    let sumaP = 0;  

    for (let i = 0; i < A.length; i++) {  
        for (let j = 0; j < A.length; j++) {  
            if (A[i][j] % 2 === 0) {  
                sumaP += A[i][j];  
            }
        }
    }

    return sumaP;
}

// Ejemplos de uso:
console.log(sumaParesA([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 20
console.log(sumaParesA([[10, 20], [30, 40]]));              // 100
console.log(sumaParesA([[1, 3, 5], [7, 9, 11], [13, 15, 17]])); // 0 
console.log(sumaParesA([[2, 4, 6], [8, 10, 12], [14, 16, 18]])); // 90
console.log(sumaParesA([[5, 7], [8, 12], [13, 17]]));       // 20 
