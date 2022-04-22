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
var submit = document.getElementById("result2");
var cityInput = document.getElementById("cityTextField");


document.getElementById("cityAddStart").addEventListener("click",()=>{
    let addStart = cityInput.value;
    citiesArray.unshift(addStart);
    submit.innerHTML = citiesArray;
        
});

document.getElementById("cityAddEnd").addEventListener("click",()=>{
    let addEnd = cityInput.value;
    citiesArray.push(addEnd);
    submit.innerHTML = citiesArray;
})

document.getElementById("removeStart").addEventListener("click",()=>{
    let removeStart = cityInput.value;
    citiesArray.shift(removeStart);
    submit.innerHTML = citiesArray;
})

document.getElementById("removeEnd").addEventListener("click",()=>{
    let removeEnd = cityInput.value;
    citiesArray.pop(removeEnd);
    submit.innerHTML = citiesArray;
})

document.getElementById("listClear").addEventListener("click",()=>{
    citiesArray=[];
    submit.innerHTML = citiesArray;
})

document.getElementById("listShow").addEventListener("click",()=>{
    
    citiesArray.forEach(e => e);
    submit.innerHTML = citiesArray;
    // for(var i=0; i<citiesArray.length;i++){
    //     console.log(citiesArray[i]);
    //     submit.innerHTML += `<h4>${citiesArray[i]}</h4>`;
        
    // }
})

document.getElementById("find1").addEventListener("click",()=>{

    let findCity = citiesArray.find((city, index)=>{
        return city == cityInput.value;
    });

    submit.innerHTML = findCity;
})
document.getElementById("cityFilter").addEventListener("click",()=>{
    let filteredCities =  citiesArray.filter((city)=>{
        
       return city == cityInput.value;
     });
   
     if(filteredCities.length ==0 ){
       submit.innerHTML = "City Not Found";
     }
     else{
         submit.innerHTML = `${filteredCities}`;
     }
   
   });

   document.getElementById("chartAtFilter").addEventListener("click",()=>{
       let filteredCities = citiesArray.filter((city)=>{
           return city.charAt() == cityInput.value;
       });
       if(filteredCities.length == 0){
           submit.innerHTML = "City Not Found";
       }
       else{
           submit.innerHTML = filteredCities;
       }
   })