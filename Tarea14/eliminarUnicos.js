/**
 * uniqueElements
 * 
 * @param {number[]} A El arreglo de números enteros.
 * @returns {[number[], number]} Un arreglo que contiene el nuevo arreglo de números únicos y el número entero de elementos únicos.
 */
function uniqueElements(A) {
    const n = A.length;  

    if (n === 0) {
        return [[], 0];  
    }

    const B = new Array(n);  
    let j = 0;  

    for (let i = 0; i < n; i++) {
        
        if (j === 0 || A[i] !== B[j - 1]) {
            B[j] = A[i];  
            j++;  
        }
    }

    return [B.slice(0, j), j];
}

// Ejemplos de uso:
const A = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const [B, k] = uniqueElements(A);
console.log(B); // [1, 2, 3, 5]
console.log(k); // 4
