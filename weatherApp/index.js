
    const selectElement = document.querySelector('.SelectOption');
    const api = 'https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=6dc05b152140d6cd28a3a2210eda3a45'
    fetch(api)
    .then(res =>  res.json())
    .then(data => {

        const { feels_like, humidity, pressure, temp, temp_min, temp_max } = data.list[0].main;
        const { main, description, icon } = data.list[0].weather[0];
        const { speed } = data.list[0].wind;
        document.querySelector('.city').textContent = 'Peshawar';
        document.querySelector('.pre').textContent = pressure;
        document.querySelector('.feel').textContent = `${Math.round(feels_like - 273.15)}°C`; 
        document.querySelector('.hum').textContent = `${humidity}%`;
        document.querySelector('.max_temp').textContent = `${Math.round(temp_max - 270)}°C`;
        document.querySelector('.min_temp').textContent = `${Math.round(temp_min - 278)}°C`;
        document.querySelector('.name').textContent = `${main}`;
        document.querySelector('.des').textContent = `${description}`;
        document.querySelector('.air').textContent = `${speed} km/hr`;
        const celcius = document.querySelector('.temp').textContent = `${Math.round(temp - 268.15)}`;
        const image = document.querySelector('.icon');
        image.src = (celcius >= 0 && celcius <= 10) ? 'assets/weather2.gif' :
            (celcius >= 11 && celcius <= 20) ? 'assets/weather.gif' :
            'assets/weather1.gif';
    })
   
    function displayWeather(city, data, tempature) {
        const { feels_like, humidity, pressure, temp, temp_min, temp_max } = data.main;
        const { main, description, icon } = data.weather[0];
        const { speed } = data.wind;
        document.querySelector('.city').textContent = city;
        document.querySelector('.pre').textContent = pressure;
        document.querySelector('.feel').textContent = `${Math.round(feels_like - 273.15)}°C`; 
        document.querySelector('.hum').textContent = `${humidity}%`;
        document.querySelector('.max_temp').textContent = `${Math.round(temp_max - 270)}°C`;
        document.querySelector('.min_temp').textContent = `${Math.round(temp_min - 278)}°C`;
        document.querySelector('.name').textContent = `${main}`;
        document.querySelector('.des').textContent = `${description}`;
        document.querySelector('.air').textContent = `${speed} km/hr`;
        const celcius = document.querySelector('.temp').textContent = tempature;
        //  `${Math.round(temp - 273.15)}`;
        const image = document.querySelector('.icon');
        image.src = (celcius >= 0 && celcius <= 10) ? 'assets/weather2.gif' :
            (celcius >= 11 && celcius <= 20) ? 'assets/weather.gif' :
            'assets/weather1.gif';
    }

    fetch(api)
            .then(res =>  res.json())
            .then(data => {
                selectElement.addEventListener('change', function () {
                    const selectedCity = this.value;
                    let selectedData;
                    // Determine which data point to display based on selected city
                    switch (selectedCity) {
                        case 'Peshawar':
                        selectedData = data.list[0];  
                        displayWeather('Peshawar', selectedData, tempature = 17);
                        break;
                        case 'Islamabad':
                            selectedData = data.list[1];  
                            displayWeather('Islamabad', selectedData, tempature = 9);
                            break;
                        case 'Karachi':
                            selectedData = data.list[2];  
                            displayWeather('Karachi', selectedData, tempature = 25);
                            break;
                        case 'Lahore':
                            selectedData = data.list[3];  
                            displayWeather('Lahore', selectedData, tempature = 27);
                            break;
                        default:
                            const { feels_like, humidity, pressure, temp, temp_min, temp_max } = data.list[0].main;
                            const { main, description, icon } = data.list[0].weather[0];
                            const { speed } = data.list[0].wind;
                            document.querySelector('.city').textContent = 'Peshawar';
                            document.querySelector('.pre').textContent = pressure;
                            document.querySelector('.feel').textContent = `${Math.round(feels_like - 273.15)}°C`; 
                            document.querySelector('.hum').textContent = `${humidity}%`;
                            document.querySelector('.max_temp').textContent = `${Math.round(temp_max - 270)}°C`;
                            document.querySelector('.min_temp').textContent = `${Math.round(temp_min - 278)}°C`;
                            document.querySelector('.name').textContent = `${main}`;
                            document.querySelector('.des').textContent = `${description}`;
                            document.querySelector('.air').textContent = `${speed} km/hr`;
                            const celcius = document.querySelector('.temp').textContent = `${Math.round(temp - 268.15)}`;
                            const image = document.querySelector('.icon');
                            image.src = (celcius >= 0 && celcius <= 10) ? 'assets/weather2.gif' :
                            (celcius >= 11 && celcius <= 20) ? 'assets/weather.gif' :
                            'assets/weather1.gif';
                    }
                })
            })
