const button = document.getElementById("btn");
console.log(button)


function showTime() {
     const currenTime = new Date();
     const time = `${currenTime.getHours()}:${currenTime.getMinutes()}:${currenTime.getSeconds()}`;
     console.log(time)
     document.getElementById("time").innerText= time
}
let interval = setInterval(showTime, 1000);

button.addEventListener("click", () => {
    clearInterval(interval);
});
    
