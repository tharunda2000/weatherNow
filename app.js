
function search(){

let cityName = document.getElementById("floatingInput").value;
console.log(cityName);

fetch(`http://api.weatherapi.com/v1/current.json?key=7bbf3c05fb7345d2ade192116252501&q=${cityName}`)
.then(res=>res.json())
.then(data=>{
    console.log(data);

    document.getElementById("card").innerHTML=`<div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>${data.location.name}</h2>
          <img src="${data.current.condition.icon}" class="mb-3 mt-3 w-25" alt=""> 
          <p></p>
          <button class="btn btn-outline-light" type="button" onclick="search()">Refresh</button>
        </div>
      </div>`
})



}