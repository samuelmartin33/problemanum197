function descodificarEtapa1(texto1) {
  const mensj = texto1.split('');
  const resultado = new Array(mensj.length);
  let inicio = 0;
  let fin = mensj.length - 1;

  for (let i = 0; i < mensj.length; i++) {
    if (i % 2 === 0) {
      resultado[inicio] = mensj[i];
      inicio++;
    } else {
      resultado[fin] = mensj[i];
      fin--;
    }
  }
  return resultado.join('');
}

function descodificar1() {
  const mensaje = document.getElementById('mensaje').value;
  const resultado = descodificarEtapa1(mensaje);
  document.getElementById('resultado').innerText = `Etapa 1: ${resultado}`;
}


function descodificarEtapa2(texto2) {
  const vocales = 'aeiouAEIOU';
  let resultado = '';
  let espacios = '';

  for (let i = 0; i < texto2.length; i++) {
    const letra = texto2[i];
    if (vocales.includes(letra)) {
      resultado += espacios.split('').reverse().join('');
      resultado += letra;
      espacios = '';
      
    } else {
      espacios += letra;
    }
  }

  resultado += espacios.split('').reverse().join('');
  return resultado;
}

function descodificar2() {
  const mensaje = document.getElementById('mensaje').value;
  const resultado = descodificarEtapa2(mensaje);
  document.getElementById('resultado').innerText = `Etapa 2: ${resultado}`;
}

function descifrarMensajeCompleto(texto1) {
  const etapa1 = descodificarEtapa1(texto1);
  const etapa2 = descodificarEtapa2(etapa1);
  return `${texto1} => ${etapa2}`;
}

function descifrarCompleto() {
  const mensaje = document.getElementById('mensaje').value;
  const resultado = descifrarMensajeCompleto(mensaje);
  document.getElementById('resultado').innerText = resultado;
}
