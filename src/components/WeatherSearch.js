import axios from 'axios';
import React, {useState, useEffect} from 'react';
import WeatherInfo from './WeatherInfo';
import useAxios from '../hooks/useAxios';

function WeatherSearch () {

    const [setUrl, data, loading, isLoading, error] = useAxios();

    const [cityName, setCityName] = useState("New York City");
    const [cityData, setCityData] = useState();

    useEffect(
        () => {
            //fetch city weather data
            const API_KEY = process.env.REACT_APP_API_KEY;
            let url = "https://api.openweathermap.org/data/2.5/weather?q="
            + cityName + "&appid=" + API_KEY;

            console.log("name:" + cityName + ", url:" + url);

            setUrl(url);
            isLoading(true);
            
        },
        [cityName]
    );

    async function handleSubmit(e) {
        e.preventDefault();
        let cityName = e.target.cityName.value;
        setCityName(cityName);

        // const API_KEY = process.env.REACT_APP_API_KEY;

        // let url = "https://api.openweathermap.org/data/2.5/weather?q="
        // + cityName + "&appid=" + API_KEY;

        // console.log("name:" + cityName + ", url:" + url);
        // let result = null;

        // try {

        //     let result = await axios.get(url);

        //     console.log("Result:" + JSON.stringify(result));

        // }
        // catch (error) {
        //     console.log("error:" + e);
        //     alert("Error, could not fetch data:" + error);
        // }
    }

    
    return ( 
        <div class="ocean">
        <main role="main" class="inner cover">
            <div class="fonts">
            <h1 class="cover-heading">Weather Info.</h1>
            <p class="lead">Please enter the name of a city: </p>
  
            <form class="form-group" onSubmit={handleSubmit}>
                <label> City: </label>
                <input type="text" name="cityName" />
               <br/><br/>
                <button class="btn btn-primary">Get Weather Data</button>
                
            </form>
            </div>
        {
            (!loading && data)
            ?
            <WeatherInfo data={data}/>
            :
            <h1>Loading...</h1>
            
        }

        </main>
        </div>
     );
}

export default WeatherSearch ;