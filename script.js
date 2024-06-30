
let show = document.getElementById("show");
let search = document.getElementById("search");
let cityVal = document.getElementById("city");
let wgif = document.getElementById('wgif');


let key = "ea6e553b0b86c1f3eabe4859d9aacc9c";

let getWeather = () => {
  let cityValue = cityVal.value;
  if (cityValue.length == 0) {
    show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
  }
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}`;
    cityVal.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        cityName = data.name
        country = data.sys.country
        cityWeather=data.weather[0].main
        desc= data.weather[0].description
        weatherIcon = data.weather[0].icon    
        temp = (data.main.temp-273).toFixed()
        feelsLike=(data.main.feels_like-273).toFixed()
        humidity=data.main.humidity
        pressure=data.main.pressure
        wind = data.wind.speed
        const d = new Date() 
      

  switch (cityWeather) {
   case "Clear":
          
       document.getElementById('wgif').style.backgroundImage = "url(./gifs/clear1.gif)"
       break;
       
   case "Clouds":
     
       document.getElementById('wgif').style.backgroundImage = "url(./gifs/clouds.gif)"
        break;
    
   case "Fog" :
     
       document.getElementById('wgif').style.backgroundImage = "url(./gifs/fog.gif)"
        break;
    
   case "Rain" :
     
       document.getElementById('wgif').style.backgroundImage = "url(./gifs/rain.gif)"
        break;
    
    
   case "Snow":
     
       document.getElementById('wgif').style.backgroundImage = "url(./gifs/snow.gif)"
        break;
    
   case "Thunderstorm":
     
       document.getElementById('wgif').style.backgroundImage = "url(./gifs/thunderstorm.gif)"
        break;

   default:
   
       document.getElementById('canvas').style.backgroundImage = "url(./gifs/clear1.gif)"
       break;   
        }
      
        switch(cityWeather){
            
           
        }

        show.innerHTML = `
        <h2>${cityName}, ${country}</h2>
        <h4 class="weather">${d}</h4>
        <h4 class="desc">${cityWeather} - ${desc}</h4>
        <h4 class="feel">Feels Like ${feelsLike}&#176C</h4>
        <img src="https://openweathermap.org/img/wn/${weatherIcon}@2x.png"">
        <h1>${temp}&#176C</h1>
          <table class="tables mt-4" style="width:100%">
            <tbody class="tables-body">
            <tr>
              <th><i class="fa-solid fa-wind"></i> Wind</th>
              <th><i class="fa-solid fa-droplet"></i> Humidity</th> 
              <th><i class="fa-solid fa-temperature-full"></i> Pressure</th>
            </tr>
            <tr>
              <td>${wind}km/h</td>
              <td>${humidity}%</td>
              <td>${pressure} mb</td>
            </tr>
          </tbody>
        </table> 
        `;
      })
      .catch(() => {
        show.innerHTML = `<h3 class="error">City not found</h3>`;
      });
  }
};
search.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
