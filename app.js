
function search(){

let cityName = document.getElementById("floatingInput").value;
console.log(cityName);

fetch(`https://api.weatherapi.com/v1/current.json?key=7bbf3c05fb7345d2ade192116252501&q=${cityName}`)
.then(res=>res.json())
.then(data=>{
    console.log(data);

    document.getElementById("card").innerHTML=`<div class="h-100 p-5 text-bg-dark rounded-3"" style="max-width: 740px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${data.current.condition.icon}" class="img-fluid rounded-start w-70 mr-5" alt="...">
    </div>
    <div class="col-md-8  ">
      <div class="card-body">

      <button class="btn btn-danger mb-2" type="button" disabled>
      <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
      <span role="status">Live</span>
    </button>

        <h5 class="card-title mb-3">${data.location.name}</h5>
         <ul class="list-group ">
           <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">country</div>
                 ${data.location.country}
            </div>
           </li>

           <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">Region</div>
                 ${data.location.region}
            </div>

            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">Condition</div>
                 ${data.current.condition.text} 
            </div>
           </li>

            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">Temperature</div>
                 ${data.current.temp_c} C
            </div>
           </li>

           <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
            <div class="fw-bold">Wind Speed</div>
                 ${data.current.wind_kph} kph
            </div>
           </li>

</ul> 

      <button class="btn btn-outline-light mt-4" type="button" onclick="search()">Refresh</button>

      </div>
    </div>
  </div>
</div>
      `
})



}