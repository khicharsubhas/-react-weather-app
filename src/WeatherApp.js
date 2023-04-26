import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Weather.css"
function WeatherApp() {



    const API_KEY = "0e20d07828c12e4366775ec6a42e5a16"
    const [inputCity, setInputCity] = useState("")
    const [data, setData] = useState("");

    const getWeatherDetails = (cityName) => {
        if (!cityName) return
        const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;

        axios.get(api_url).then((res) => {

            setData(res.data)
        }).catch((err) => {
            console.log("err", err)
        })
    }

    const handleChangeInput = (e) => {
        setInputCity(e.target.value)
        // console.log("value", e.target.value)
    }

    const handleSearch = () => {
        getWeatherDetails(inputCity)
    }


    useEffect(() => {
        getWeatherDetails("new delhi")
    }, [])

    return (
        <div className="col-md-12">
            <div className="weatherbg">
                <h1 className="heading">  Weather App</h1>
                <input type="text" value={inputCity} onChange={handleChangeInput} />
                <button onClick={handleSearch}>search</button>
            </div>
            <div className="weather-box">
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTMEBVjlR-RJaEJuZoimFlGU9L2DcjGV4zYg&usqp=CAU" alt="" />
                    <h5 className="weatherCity">{data?.name}</h5>
                    <h6 className="weatherTemp"> {((data?.main?.temp) - 273.15).toFixed(2)}  °C</h6>
                </div>
            </div>
        </div>
    )
}
export default WeatherApp;