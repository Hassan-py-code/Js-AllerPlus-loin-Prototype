
let image = document.querySelector("img");
let form = document.querySelector("form");
let input = document.querySelector("input");
let date=document.querySelector('.date');

let my_date=new Date();
date.textContent=my_date;

// add form to send data
form.addEventListener("submit",(event)=>{
event.preventDefault();
  
if(input.value ===""){
       alert("Please enter  any city");
       return;
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=248245d8eb30ddd272396d1f1ea6ea9a`)
.then(response=> response.json())
.then(data => {
     

     function use_data_api(){
  
        let icon_data=data.weather[0].icon;
         
        image.src=`http://openweathermap.org/img/wn/${icon_data}@2x.png`;

            document.querySelector("#city").textContent=data.name;
            document.querySelector("#temp").textContent= (data.main.temp-273.15).toFixed(2)  + "°C";
            document.querySelector("#description").textContent=data.weather[0].description;
            document.querySelector("#humidity").textContent=data.main.humidity + "%";
            document.querySelector("#speed").textContent=data.wind.speed + "Km/h";
            document.querySelector("#country").textContent=data.sys.country;  
     }
     
     //call function
     use_data_api();


   
    
})
.catch(error=>{
    console.log("you have problem error",error)
 
})
    
    form.reset();
          

}) //end form
            


