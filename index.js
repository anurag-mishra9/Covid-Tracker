var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };



fetch ('https://corona.lmao.ninja/v2/countries/')
.then((response)=>{
console.log(response);
return response.json();
})
.then((data)=>{
    var opt = null;
    var sel = document.getElementById("countryList");
    for(i = 0; i<data.length; i++) { 
        console.log(data[i].countryInfo.iso2);
        console.log(data[i].country);
        opt = document.createElement('option');
        opt.value = data[i].countryInfo.iso2;
        opt.innerHTML = data[i].country;
        sel.appendChild(opt);
    }  

})

function getOption() { 
    selectElement = document.querySelector('#countryList'); 
    output = selectElement.value; 

    fetch ('https://corona.lmao.ninja/v2/countries/'+output)
    .then((response)=>{
    console.log(response);
    return response.json();
    })
    .then((data)=>{
    newDate = new Date(data.updated);
    document.getElementById("timezone").innerHTML = newDate.toLocaleDateString("en-US",options);    
    document.getElementById("flag").src = data.countryInfo.flag;
    document.getElementById("country").innerHTML = data.country;
    document.getElementById("active").innerHTML = data.active;
    document.getElementById("cases").innerHTML = data.cases;
    document.getElementById("critical").innerHTML = data.critical;
    document.getElementById("death").innerHTML = data.deaths;
    document.getElementById("tests").innerHTML = data.tests;
    document.getElementById("recovered").innerHTML = data.recovered;
    })
} 

fetch ('https://corona.lmao.ninja/v2/countries/'+'in')
.then((response)=>{
console.log(response);
return response.json();
})
.then((data)=>{
newDate = new Date(data.updated);
document.getElementById("timezone").innerHTML = newDate.toLocaleDateString("en-US",options);   
document.getElementById("flag").src = data.countryInfo.flag;
document.getElementById("country").innerHTML = data.country;
document.getElementById("active").innerHTML = data.active;
document.getElementById("cases").innerHTML = data.cases;
document.getElementById("critical").innerHTML = data.critical;
document.getElementById("death").innerHTML = data.deaths;
document.getElementById("tests").innerHTML = data.tests;
document.getElementById("recovered").innerHTML = data.recovered;
})