

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('#miTextarea');
    const resultadoDiv = document.querySelector('#resultado');
    const botonEncriptar = document.querySelector('#botonEncriptar');
    const botonDesencriptar = document.querySelector('#botonDesencriptar');
    const botonCopiar = document.querySelector('#botonCopiar');
    const imagenDetective = document.querySelector('#imagenDetective');
    const h2 = resultadoDiv.querySelector('h2');
    const p = resultadoDiv.querySelector('p');

    function encriptarTexto() {
        let texto = textarea.value;
        let textoEncriptado = '';

        if (/[^a-z\s]/.test(texto)) {
            alert("Solo se permiten letras minúsculas sin acentos y espacios.");
            return;
        }

        for (let i = 0; i < texto.length; i++) {
            if (texto[i] === 'e') {
                textoEncriptado += 'enter';
            } else if (texto[i] === 'i') {
                textoEncriptado += 'imes';
            } else if (texto[i] === 'a') {
                textoEncriptado += 'ai';
            } else if (texto[i] === 'o') {
                textoEncriptado += 'ober';
            } else if (texto[i] === 'u') {
                textoEncriptado += 'ufat';
            } else {
                textoEncriptado += texto[i];
            }
        }

        mostrarResultado(textoEncriptado);
    }

    function desencriptarTexto() {
        let texto = textarea.value;

        if (/[^a-z\s]/.test(texto)) {
            alert("Solo se permiten letras minúsculas sin acentos y espacios.");
            return;
        }

        let textoDesencriptado = '';

        let i = 0;
        while (i < texto.length) {
            if (texto.substr(i, 5) === 'enter') {
                textoDesencriptado += 'e';
                i += 5;
            } else if (texto.substr(i, 4) === 'imes') {
                textoDesencriptado += 'i';
                i += 4;
            } else if (texto.substr(i, 2) === 'ai') {
                textoDesencriptado += 'a';
                i += 2;
            } else if (texto.substr(i, 4) === 'ober') {
                textoDesencriptado += 'o';
                i += 4;
            } else if (texto.substr(i, 4) === 'ufat') {
                textoDesencriptado += 'u';
                i += 4;
            } else {
                textoDesencriptado += texto[i];
                i++;
            }
        }

        mostrarResultado(textoDesencriptado);
    }

    function mostrarResultado(texto) {
        h2.style.display = 'none';
        p.style.display = 'none';
        imagenDetective.style.display = 'none';
        
        resultadoDiv.innerHTML = texto ? `<p>${texto}</p>` : '';
    }

    function copiarTexto() {
        const texto = resultadoDiv.querySelector('p').textContent;
        navigator.clipboard.writeText(texto).then(() => {
            alert("Texto copiado al portapapeles.");
        }).catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
    }

    botonEncriptar.addEventListener('click', encriptarTexto);
    botonDesencriptar.addEventListener('click', desencriptarTexto);
    botonCopiar.addEventListener('click', copiarTexto);
    
    textarea.addEventListener('input', function() {
       
        if (!textarea.value) {
            mostrarResultado(''); 
        }
    });
});