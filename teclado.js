
function insertar(texto) {
    const input = document.getElementById("funcion");
    const inicio = input.selectionStart;
    const fin = input.selectionEnd;
    const valorActual = input.value;

    input.value = valorActual.substring(0, inicio) + texto + valorActual.substring(fin);

    input.focus();
    input.selectionStart = input.selectionEnd = inicio + texto.length;
}

function borrar() {
    const input = document.getElementById("funcion");
    const inicio = input.selectionStart;
    const fin = input.selectionEnd;

    if (inicio === fin && inicio > 0) {
        input.value = input.value.slice(0, inicio - 1) + input.value.slice(fin);
        input.selectionStart = input.selectionEnd = inicio - 1;
    } else {
        input.value = input.value.slice(0, inicio) + input.value.slice(fin);
        input.selectionStart = input.selectionEnd = inicio;
    }

    input.focus();
}
