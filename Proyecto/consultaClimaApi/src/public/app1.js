const boton = document.getElementById("btnBuscar");
const resultado = document.getElementById("divResultado");

boton.addEventListener("click", async () => { //si el botón buscar se presiona

  const city = document.getElementById("txtCiudad").value;

    if(city == ''){ // se valida si se escribió una ciudad
        resultado.innerHTML = `
            <div class="card-content">
                <p>Debes escribir una ciudad</p>
            </div>
        `;
        return;
    }
  else{
    try {

    const response = await fetch( //va a realizar la consulta llevando la ciudad
      `/api/weather?city=${city}`
    );

    const data = await response.json(); //la información que devolvió para mostrarse
       resultado.innerHTML = `
       <div class="card">
            <div class="card-content">
                <h3>${data.city}</h3>
                <img src=${data.icons}>
                <p>Temperatura: <strong>${data.temperature}°C</strong></p>
                <p>Clima: <strong>${data.description}</strong></p>
                <p>Salida del sol: <strong>${data.sunstart}</strong></p>
                <p>Puesta del sol: <strong>${data.sunstop}</strong></p>
            </div>
        </div>
       `; 

  } catch (error) {//si no la puede consultar, presenta el error

    resultado.innerHTML = `
      <p>Error obteniendo datos</p>
    `;
  }
}
});