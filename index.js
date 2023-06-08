
const apikey = "3d9ec4980ff14e71bd662f2ecd0c7b28";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector('.search input')
const searchbtn= document.querySelector('.search button')
const weathericon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiURL + city + `&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+'°c';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity+'%';
    document.querySelector('.wind').innerHTML = data.wind.speed+' km/h';

    if(data.weather[0].main == 'Clouds'){
        weathericon.src = '/weather-app-img/images/clouds.png';
    }else if(data.weather[0].main == 'Clear'){
        weathericon.src = '/weather-app-img/images/clear.png';
    }else if(data.weather[0].main == 'Drizzle'){
        weathericon.src = '/weather-app-img/images/drizzle.png';
    }else if(data.weather[0].main == 'Rain'){
        weathericon.src = '/weather-app-img/images/rain.png';
    }else if(data.weather[0].main == 'Snow'){
        weathericon.src = '/weather-app-img/images/snow.png';
    }else if(data.weather[0].main == 'Wind'){
        weathericon.src = '/weather-app-img/images/wind.png';
    }else if(data.weather[0].main == 'Mist'){
        weathericon.src = '/weather-app-img/images/mist.png'; 
    }
    document.querySelector(".weather").style.display='block';
    document.querySelector(".error").style.display = "none";

    }
}
searchbtn.addEventListener('click',()=>{
    checkweather(searchbox.value);  
})