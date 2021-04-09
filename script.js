let container = document.body;
container.setAttribute("style","background-color:  rgb(34, 77, 78)")
let div_1 = document.createElement("div");
div_1.setAttribute("style","width:100%;height:auto;");
div_1.setAttribute("class","card-group");
container.appendChild(div_1);


async function userData(url) {
    let country = await fetch(url);
    var myArr = await country.json();
    return myArr;
}
async function showData(a,b)
    {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${a}&lon=${b}&appid=c79d49504668ed109abed6c5750e6fd7`);
    let weatherData = await data.json();
    alert (`Temperature : ${weatherData.main.feels_like}F
 Description :${weatherData.weather[0].description}`);
    }

async function countryData(){
      try{
         myArr = await userData("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
      for(let ind=0;ind<myArr.length;ind++){
        let div_2 = document.createElement("div");
        div_2.setAttribute("style","display:flex;justify-content:center;padding:5px;");
        div_2.setAttribute("class","col-lg-4 col-sm-12 ");
        div_1.appendChild(div_2);

        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class","card");
        cardDiv.setAttribute("style","background: rgb(101,110,92);background: linear-gradient(90deg, rgb(130, 155, 96) 0%, rgba(215,178,115,1) 52%, rgba(100,100,81,1) 100%);");
        div_2.appendChild(cardDiv);
        
        let cardHeader = document.createElement("div");
        cardHeader.setAttribute("class","row");
        cardHeader.setAttribute("style","background-color:black;color:white;font-size:20px;font-family:monospace;height:35px;width:100%; margin-left:0px; display:flex;justify-content:center;");
        cardHeader.innerText = myArr[ind]["name"];
        
        cardDiv.appendChild(cardHeader);

        let flag = document.createElement("img");
        flag.setAttribute("class","card-img-top");
        flag.setAttribute("src",myArr[ind]["flag"]);
        flag.setAttribute("style","width:300px;height:200px; padding:10px;");
        cardDiv.appendChild(flag);

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
        cardDiv.appendChild(cardBody);

        let capital = document.createElement("p");
        capital.setAttribute("class","card-text");
        capital.setAttribute("style","color:white;display:flex;justify-content:center;font-family:monospace;font-size:20px;");
        capital.innerText = "Capital : " + myArr[ind]["capital"];
        cardBody.appendChild(capital);
        
        let region = document.createElement("p");
        region.setAttribute("class","card-text");
        region.setAttribute("style","color:white;display:flex;justify-content:center;font-family:monospace;font-size:20px;");
        region.innerText = "Region : " + myArr[ind]["region"];
        cardBody.appendChild(region);

        let lat = myArr[ind]["latlng"][0];
        let lon = myArr[ind]["latlng"][1];
        
        let cardCode = document.createElement("p");
        cardCode.setAttribute("class","card-text");
        cardCode.setAttribute("style","color:white;display:flex;justify-content:center;font-family:monospace;font-size:20px;");
        cardCode.innerText = "Code : " + myArr[ind]["cioc"];
        cardBody.appendChild(cardCode);

        let button = document.createElement("button");
        button.setAttribute("class", "btn btn-primary");
        button.setAttribute("onclick",`showData(${lat},${lon})`);
        button.setAttribute("style","margin-left:50px; border-color: white; background: rgb(101,110,92);background: linear-gradient(90deg, rgb(130, 155, 96) 0%, rgba(215,178,115,1) 52%, rgba(100,100,81,1) 100%);");
        button.innerText = "Click For Weather";
        cardBody.appendChild(button);
      }
    }catch(err){
        console.error(err);
}
}

countryData();