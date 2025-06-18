function sugerirValorInicial(f, desde = -10, hasta = 10, paso = 0.1) {
    for (let x = desde; x < hasta; x += paso) {
        const fx = f(x);
        const fxSig = f(x + paso);

        if (fx * fxSig < 0) {
            return (x + x + paso) / 2; 
        }
    }

    return null;
}

/*function sugerirInicial() {
    const funcionInput = document.getElementById("funcion").value;

    let f;
    try {
        f = new Function("x", `return ${funcionInput}`);
    } catch (e) {
        alert("rrror de sintaxis en la funcion.");
        return;
    }

    let sugerido;
    try {
        sugerido = sugerirValorInicial(f);
    } catch (e) {
        alert("error al evaluar la funcion");
        return;
    }

    if (sugerido !== null) {
        document.getElementById("x0").value = sugerido.toFixed(6);
        alert(`se sugiere x₀ ≈ ${sugerido.toFixed(6)}`);
    } else {
        alert("no se detectó ningun cambio de signo en el intervalo.");
    }


}*/

function sugerirInicial() {
    const funcionInput = document.getElementById("funcion").value;
    const mensaje = document.getElementById("mensaje-sugerido");

    let f;
    try {
        f = new Function("x", `return ${funcionInput}`);
    } catch (e) {
        mensaje.textContent = "error de sintaxis en la funcin.";
        mensaje.style.color = "red";
        return;
    }

    let sugerido;
    try {
        sugerido = sugerirValorInicial(f);
    } catch (e) {
        mensaje.textContent = "error al evaluar la funcion.";
        mensaje.style.color = "red";
        return;
    }

    if (sugerido !== null) {
        const valor = sugerido.toFixed(6);
        document.getElementById("x0").value = valor;
        //mensaje.textContent = `se sugiere x₀ ≈ ${valor}`;
        mensaje.style.color = "#007acc";
    } else {
        mensaje.textContent = "no se detectó cambio de signo en el intervalo.";
        mensaje.style.color = "orange";
    }
}
