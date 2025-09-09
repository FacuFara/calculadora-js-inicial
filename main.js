// Lee un número desde un prompt y valida que sea numérico
function pedirNumero(texto) {
  const entrada = prompt(texto);
  if (entrada === null) return null; // Si el usuario cancela, devolvemos null
  const numero = parseFloat(entrada.replace(",", "."));
  if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
    return pedirNumero(texto); // Pedir de nuevo si no es válido
  }
  return numero;
}

// Operaciones básicas
function sumar() {
  const a = pedirNumero("Ingrese el primer número");
  if (a === null) return;
  const b = pedirNumero("Ingrese el segundo número");
  if (b === null) return;
  alert(a + " + " + b + " = " + (a + b));
}

function restar() {
  const a = pedirNumero("Ingrese el primer número");
  if (a === null) return;
  const b = pedirNumero("Ingrese el segundo número");
  if (b === null) return;
  alert(a + " - " + b + " = " + (a - b));
}

function multiplicar() {
  const a = pedirNumero("Ingrese el primer número");
  if (a === null) return;
  const b = pedirNumero("Ingrese el segundo número");
  if (b === null) return;
  alert(a + " × " + b + " = " + (a * b));
}

function dividir() {
  const a = pedirNumero("Ingrese el primer número");
  if (a === null) return;
  const b = pedirNumero("Ingrese el segundo número");
  if (b === null) return;
  if (b === 0) {
    alert("No se puede dividir por cero");
  } else {
    alert(a + " ÷ " + b + " = " + (a / b));
  }
}

// Menú principal con switch para elegir la operación
function iniciarCalculadora() {
  let continuar = true;
  while (continuar) {
    const opcion = prompt(
`Seleccione una opción:
1) Sumar
2) Restar
3) Multiplicar
4) Dividir
0) Salir`
    );

    if (opcion === null) break; // Cancelar sale del bucle

    switch (opcion.trim()) {
      case "1":
        sumar();
        break;
      case "2":
        restar();
        break;
      case "3":
        multiplicar();
        break;
      case "4":
        dividir();
        break;
      case "0":
        continuar = false;
        break;
      default:
        alert("Opción inválida, por favor elija entre 0 y 4.");
    }
  }
  alert("¡Gracias por usar la calculadora!");
}

// Ejecutamos la calculadora al cargar la página
iniciarCalculadora();