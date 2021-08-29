document.getElementById("search-button").addEventListener("click", function () {
    const userInput = document.getElementById("user-input");
    const userInputValue = userInput.value;
    userInput.value = ''
    if (userInputValue == '') {
        alert("Please Enter Your choose location")
    }
    loadData(userInputValue)

})

const apiKey = "appid=16c7c6f11cef210fbdc28de7a128a70d"

// data load
const loadData = async (location = "Dhaka") => {
    try {
        const url = `HTTPS://api.openweathermap.org/data/2.5/weather?q=${location}&${apiKey}`
        const res = await fetch(url)
        const data = await res.json()
        displayWeather(data)
    } catch (e) {
        console.log(e)
    }


}
loadData()



// Display weather
const displayWeather = (data) => {
    const display = document.getElementById("display-weather");
    display.textContent = ''
    const div = document.createElement("div");
    div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
    <h1>${data.name}</h1>
   <h3><span>${Math.round(data.main.temp-273.15)}</span>&deg;C</h3>
    <h1 class="lead">${data.weather[0].description}</h1>
    `
    display.appendChild(div)

    // console.log(data)


}