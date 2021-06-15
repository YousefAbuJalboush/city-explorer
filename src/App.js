import React, { Component } from 'react'
import axios from 'axios';


import Header from './component/Header';
import Main from './component/Main';
import AlertMessage from './component/AlertMessage';
import Map from './component/Map';
import Weather from './component/Weather';


import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityInfo: {},
      lat: '',
      lon: '',
      showInfo: false,
      serError: false,
      errorMessage: '',
      weatherData: '',
    }
  };

  getNameCity = (e) => {

    this.setState({
      cityName: e.target.value
    });

  }

  getCityInfo = async (e) => {
    e.preventDefault();


    try {

      await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.7733cdd4499bcd98592de57639a159af&city=${this.state.cityName}&format=json`).then(axiosReq => {

        this.setState({
          cityInfo: axiosReq.data[0],
          lat: axiosReq.data[0].lat,
          lon: axiosReq.data[0].lon,
        })
      })

      axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then(resWeather => {
        this.setState({
          showInfo: true,
          serError: false,
          errorMessage: '',
          weatherData: resWeather.data
        })
      })

    } catch (error) {
      this.setState({
        serError: true,
        showInfo: false,
        errorMessage: error
      });
    }

  }


  render() {
    return (
      <>

        <Header />

        <Main
          getNameCity={this.getNameCity}
          getCityInfo={this.getCityInfo}
        />

        {
          (this.state.showInfo) &&
          <>
            <Map
              cityInfo={this.state.cityInfo}
            // weatherData={this.state.weatherData}
            />
            <Weather
              weatherData={this.state.weatherData}
            />
          </>
        }

        {
          this.state.serError &&
          <AlertMessage />
        }
      </>
    )
  }
}

export default App
