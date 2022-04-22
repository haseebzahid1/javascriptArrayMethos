let userNameArray = ["Haseeb"];
let username = document.getElementById("user-name");

document.getElementById("logout").addEventListener("click",()=>{
    userNameArray=[];

    // console.log(userNameArray.length)
    if(userNameArray.length === 0){        
        username.innerHTML = "Function";
    }else{
        username.innerHTML = userNameArray[0];
    }
})


var citiesArray = ["Faisalabad","Lahore", "Multan", "Larkana", "FeroozAbad", "Lahore"];
var div = document.getElementById("result2");
var cityInput = document.getElementById("cityTextField");


document.getElementById("cityAddStart").addEventListener("click",()=>{
    let addStart = cityInput.value;
    citiesArray.unshift(addStart);
    div.innerHTML = citiesArray;
        
});

document.getElementById("cityAddEnd").addEventListener("click",()=>{
    let addEnd = cityInput.value;
    citiesArray.push(addEnd);
    div.innerHTML = citiesArray;
})

document.getElementById("removeStart").addEventListener("click",()=>{
    let removeStart = cityInput.value;
    citiesArray.shift(removeStart);
    div.innerHTML = citiesArray;
})

document.getElementById("removeEnd").addEventListener("click",()=>{
    let removeEnd = cityInput.value;
    citiesArray.pop(removeEnd);
    div.innerHTML = citiesArray;
})

document.getElementById("listClear").addEventListener("click",()=>{
    citiesArray=[];
    div.innerHTML = citiesArray;
})

document.getElementById("listShow").addEventListener("click",()=>{
    
    citiesArray.forEach(e => e);
    div.innerHTML = citiesArray;
    // for(var i=0; i<citiesArray.length;i++){
    //     console.log(citiesArray[i]);
    //     submit.innerHTML += `<h4>${citiesArray[i]}</h4>`;
        
    // }
})

document.getElementById("find1").addEventListener("click",()=>{

    let findCity = citiesArray.find((city)=>{
        return city == cityInput.value;
    });

    div.innerHTML = findCity;
})
document.getElementById("cityFilter").addEventListener("click",()=>{
    let filteredCities =  citiesArray.filter((city)=>{
        
       return city == cityInput.value;
     });
   
     if(filteredCities.length ==0 ){
       div.innerHTML = "City Not Found";
     }
     else{
         div.innerHTML = `${filteredCities}`;
     }
   
   });

   document.getElementById("chartAtFilter").addEventListener("click",()=>{
       let filteredCities = citiesArray.filter((city)=>{
           return city.charAt() == cityInput.value;
       });
       if(filteredCities.length == 0){
           div.innerHTML = "City Not Found";
       }
       else{
           div.innerHTML = filteredCities;
       }
   })

   var data = ["Faisalabad","Lahore", "Multan", "Larkana", "FeroozAbad", "Lahore"];
   var cityName = prompt('Please enter city name: ');
   
   console.log(cityName);

   var isCityFound = data.find( (city) => city == cityName);

   if(isCityFound !== undefined){
    console.log('City Found');
    var cityIndex = data.indexOf(cityName);
    console.log(`${cityName} is found at index of ${cityIndex}`);
    // console.log("Now change the city name : ");
    var cityChangeName = prompt("Do your want to change city name(Y/N)");
    if(cityChangeName.charAt().toLowerCase() == "y"){
        var newCityName = prompt("New city name");
        data.splice(cityIndex, 1, newCityName);

    }else{
        console.log("Exit");
    }
    console.log(data);
   }
   else{
    console.log('City Not Found')
   }


//    var d = data.slice(2,4);
//    console.log(d);
//    console.log(data);

// var find = data.find((city)=>city=="Multand");
// let findCity = citiesArray.find((city)=>city == cityInput.value);

// var find  = data.indexOf("Multan");
// console.log("city found at index of city");
// console.log(find);

// da.splice(2,1)

// console.log("----------------------------------")
//    var d2 = data.splice(3,2,"karach");
//    console.log(d2);
//    console.log(data);