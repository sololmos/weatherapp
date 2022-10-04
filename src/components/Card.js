import React from "react";
import Spinner from './Spinner';

const Card = ({ showData, loadingData, weather, forecast}) =>{
    var today = new Date();
    var day= today.getDate();
    var month= today.getMonth() + 1;
    var year = today.getFullYear();
    var date= day + '/' + month + '/' + year;
    var url='';
    var iconUrl = '';

    if(loadingData){
        return <Spinner/>
    };

    if(showData){
        url = 'https://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png' //access icon

    };


    return(
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)} °C</h1>
                                    <p className="card-desc"><img src={iconUrl} alt='icon'/>{weather.weather[0].description}</p>
                                    <img 
                                    className="img-fluid rounded-start"
                                    alt="imagen"
                                    src="https://images.pexels.com/photos/4176261/pexels-photo-4176261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                                </div>
                                <div className="col-md-8">
                                <div className="card-body text-start mt-2">
                                    <h5 className="card-text">Temp máx: {(weather.main.temp_max - 273.15).toFixed(1)} °C</h5>
                                    <h5 className="card-text">Temp min: {(weather.main.temp_min - 273.15).toFixed(1)} °C</h5>
                                    <h5 className="card-text">Sensación térmica: {(weather.main.feels_like - 273.15).toFixed(1)} °C</h5>
                                    <h5 className="card-text">Humedad: {weather.main.humidity} %</h5>
                                    <h5 className="card-text">Velocidad del viento: {weather.wind.speed} m/s</h5>
                                </div>

                                </div>


                            </div>
                        </div>
                    </div>

                ):(
                    <h2 className='text-light'> Sin datos  </h2>
                )
            }

        </div>
    );
}

export default Card;