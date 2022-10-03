import React from "react";
import Spinner from './Spinner';

const Card = ({ showData, loadingData, weather, forecast}) =>{
    var today = new Date();
    var day= today.getDate();
    var month= today.getMonth() + 1;
    var year = today.getFullYear();
    var date= day + '/' + month + '/' + year;

   if(loadingData){
    return <Spinner/>
   }

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
                                    <img 
                                    className="img-fluid rounded-start"
                                    alt="imagen"
                                    src="https://images.pexels.com/photos/4176261/pexels-photo-4176261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />

                                </div>
                                <div className="col-md-8">
                                <div className="card-body text-start mt-2">

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