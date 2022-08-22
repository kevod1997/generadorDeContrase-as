
const generarAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
};

for(let x = 0; x < 1; x++) {
    console.log(generarAleatorio(1, 101));

};

let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeros = "0123456789";
let simbolos = ".?,;-_¡!¿*%&$/()[]{}|@><";
let todo = numeros+letras+simbolos;

const generarContraseña = (longitud) => {
    let password = "";
    for (let x = 0; x < longitud; x++){
        let aleatorio = Math.floor(Math.random() * todo.length);
        password += todo.charAt(aleatorio);
    }
    return password;
};
    console.log(generarContraseña(12));

let cualquierCadena="Brave new world";
let azar = Math.floor(Math.random()* cualquierCadena.length)
console.log("El carácter en el índice 0 es '" + cualquierCadena.charAt(0) + "'")
console.log("El carácter en el índice 1 es '" + cualquierCadena.charAt(1) + "'")
console.log("El carácter en el índice 2 es '" + cualquierCadena.charAt(2) + "'")
console.log("El carácter en el índice 3 es '" + cualquierCadena.charAt(3) + "'")
console.log("El carácter en el índice 4 es '" + cualquierCadena.charAt(4) + "'")
console.log("El carácter en el índice 8 es '" + cualquierCadena.charAt(8) + "'")
console.log("El ultimo caracter es '" + cualquierCadena.charAt(cualquierCadena.length-1) + "'")
console.log("El caracter azaroso que te va a tocar es el '" + cualquierCadena.charAt(azar) + "'");


//usamos el += para concatenar!!
var mystring = 'alpha'; mystring += 'bet';
console.log(mystring);

