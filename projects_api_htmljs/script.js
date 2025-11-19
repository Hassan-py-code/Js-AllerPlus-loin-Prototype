

let image = document.querySelector("img");
let form = document.querySelector("form");
let input = document.querySelector("input");

// add form to send data
form.addEventListener("submit",(event)=>{
event.preventDefault();

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=248245d8eb30ddd272396d1f1ea6ea9a`)
.then(response=> response.json())
.then(data=> {

     function use_data_api(){

         console.log(data.weather[0].main);
         console.log(data)
         
          if(data.weather[0].main=="Clouds"){
               image.src="images/clouds.png";

          }else if(data.weather[0].main=="Clear"){
                image.src="images/clear.png";

          }else if(data.weather[0].main=="Rain"){
                image.src="images/rain.png";

          }else if(data.weather[0].main=="Drizzle"){
                image.src="images/drizzle.png";

          }else if(data.weather[0].main=="Mist"){
                image.src="images/mist.png";
          }

            document.querySelector("#city").textContent=data.name;
            document.querySelector("#temp").textContent=data.main.temp + "°C";
            document.querySelector("#description").textContent=data.weather[0].description;
            document.querySelector("#humidity").textContent=data.main.humidity + "%";
            document.querySelector("#speed").textContent=data.wind.speed;
            document.querySelector("#country").textContent=data.sys.country;


          //   form.reset();
          // })
     }

     use_data_api();
    
})
.catch(error=>{
    console.log("you have problem error",error)
})

}) //end form
            
