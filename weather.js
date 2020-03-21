const api = {
   key:"552f06535b1e6733edc25a6b9db60677",
   baseUrl:"https://api.openweathermap.org/data/2.5/",
}

const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', callbackFunction);

function callbackFunction(event) {
    if(event.keyCode==13) {
        console.log("pressed entered...");
         getResult(searchBox.value); 
    }
}

function getResult(searchText) {
    console.log(searchText);
    fetch(`${api.baseUrl}weather?q=${searchText}&units=metric&appid=${api.key}`)
    .then(weather=>weather.json())
    .then(result => displayResult(result));
}


function displayResult(weather){
   let city=document.querySelector('.city')
   city.innerText=`${weather.name} , ${weather.sys.country}`;

   let temp=document.querySelector('.temperature');
   temp.innerText=`${Math.round(weather.main.temp)} ℃`;


   
   let now = new Date();
   
   let dateNow = document.querySelector('.date');
   dateNow.innerHTML = now;



   let humi=document.querySelector('.humidity');
   humi.innerText=`% ${weather.main.humidity}`;

}

