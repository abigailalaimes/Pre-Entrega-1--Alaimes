const numA = parseInt(prompt("Ingrese el número deseado para calcular las cuotas"));
const numB = parseInt(prompt("Ingrese el valor de interés obligatorio (16%): "));
const operation = prompt("Ingrese el número de cuotas");

function calcularCuotas (a, b, operation) {
    
    switch (operation){
        case "1":
            console.log(a);
        break;
        case "3":
            console.log((a * (b/100)) / 3);
        break;
        case "6":
            console.log((a * (b/100)) / 6);
        break;
        case "12":
            console.log((a * (b/100)) / 12);
        break;
        default:
            console.log(0);
        break;            
}
}
calcularCuotas(numA, numB, operation);





    