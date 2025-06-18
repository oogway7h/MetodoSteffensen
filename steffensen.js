function resolver() {
            const funcion = document.getElementById("funcion").value;
            const x0 = parseFloat(document.getElementById("x0").value);
            const tol = parseFloat(document.getElementById("tolerancia").value);
            const maxIteraciones = parseInt(document.getElementById("maxIter").value);
            const resultado = document.getElementById("resultado");

            let f = function(x) {
                try {
                    return eval(funcion);
                } catch (e) {
                    resultado.textContent = "Error en la funcinn.";
                    return NaN;
                }
            };

            let x = x0;
            let iteraciones = [];
            for (let i = 0; i < maxIteraciones; i++) {
                let fx = f(x);
                let fx2 = f(x + fx);
                let denominador = fx2 - fx;

                if (denominador === 0) {
                    resultado.textContent = "Division por cero detectada.";
                    return;
                }

                let x1 = x - (fx * fx) / denominador;
                iteraciones.push(`Iteracion ${i + 1}: x = ${x1}`);

                if (Math.abs(x1 - x) < tol) {
                    resultado.textContent = iteraciones.join("\n") + `\n\nRaiz aproximada: ${x1}`;
                    return;
                }

                x = x1;
            }

            resultado.textContent = iteraciones.join("\n") + "\n\nNo se alcanzo la tolerancia en el numero maximo de iteraciones.";
        }