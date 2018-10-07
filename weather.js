class Weather{

  constructor(){

    this.key = '498461876ef3c0f277e1728be50ebaa6'
  }

  async getWeather(city,country){

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${this.key}`);

    const res = await response.json();

    return res;

  }
}