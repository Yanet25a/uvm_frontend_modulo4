export const fetchWeather = async (city) => { //trae el valor de la ciudad

  const API_KEY = process.env.API_KEY; //el apiKey está en el archivo .env 
  
  const url=`https://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
  //console.log(url);
  const response = await fetch(url); //es la respuesta de la api (url)

  if (!response.ok) { //si la respuesta no es la esperada
    throw new Error("Error consultando API externa");
  }

  const data = await response.json(); //los datos de la respuesta recibida

  return { //se toma la información para mostrar
        name: data.location.name,
        city: data.location.country,
        temperature: data.current.temperature,
        description: data.current.weather_descriptions,
        sunstart: data.current.astro.sunrise,
        sunstop: data.current.astro.sunset,
        icons: data.current.weather_icons
    };
};