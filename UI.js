
class UI{

  constructor(){
 this.weatherInfo=document.getElementById('weatherInfo');

  }

ShowData(weather){
  this.weatherInfo.innerHTML = `
  <div class="form-control bg-dark text-light  lead">Place : ${weather.name} </div>
  <div class="form-control bg-dark text-light  lead">State : ${weather.sys.country}</div>
  <div class="form-control bg-dark text-light lead">Temperature : ${weather.main.temp - 273.15} &#8451</div>
  <div class="form-control bg-dark text-light lead">Pressure : ${weather.main.pressure} hpa</div>
  <div class="form-control bg-dark text-light lead">Humidity : ${weather.main.humidity} %</div>
  <div class="form-control bg-dark text-light lead">TemperatureMin : ${weather.main.temp_min - 273.15} &#8451</div>
  <div class="form-control bg-dark text-light lead">TemperatureMax : ${weather.main.temp_max - 273.15} &#8451</div>
  <div class="form-control bg-dark text-light  lead">WindSpeed : ${weather.wind.speed}</div>
  <div class="form-control bg-dark text-light lead">WindDegree : ${weather.wind.deg}</div>
  <div class="form-control bg-dark text-light lead">Weather Description : ${weather.weather[0].description}</div>
  <img class="form-control bg-dark text-light " src="${weather.weather[0].icon}}">`




}




}