//initiating Weather obj

const weather = new Weather;

//init UI no obj

const ui = new UI;

document.getElementById('btn1').addEventListener('click',GetInput);

function GetInput(){
const input_city=document.getElementById('city').value;
const input_state=document.getElementById('state').value;
weather.getWeather(input_city,input_state).then(res => {
  
  //display weatherInformation
  ui.ShowData(res)
  
  console.log(res)
})


}
