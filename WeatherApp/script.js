const cn= document.getElementById("city-name");
const btn=document.getElementById("click");

const cp= document.getElementById("cityplace");
const ct= document.getElementById("citytime");
const citytemp= document.getElementById("temp");
const aqii = document.getElementById("aqi")

async function getData(cityname) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=17b7eb08910a4595849173343240208&q=${cityname}&aqi=yes`);

    return await promise.json()
}
btn.addEventListener("click", async () => {
    const val=cn.value;
    const result= await getData(val);
    cp.innerText = `${result.location.name}, ${result.location.region}-- ${result.location.country}`;
    ct.innerText = result.location.localtime;
    citytemp.innerText = result.current.temp_c;
    aqii.innerText = result.current.air_quality.pm10
});
