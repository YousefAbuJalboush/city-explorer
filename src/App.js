import React, { Component } from 'react'
import axios from 'axios';


import Header from './component/Header';
import Main from './component/Main';
import AlertMessage from './component/AlertMessage';
import Map from './component/Map';


import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cityName: '',
      cityInfo: {},
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
      const axiosReq = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.7733cdd4499bcd98592de57639a159af&city=${this.state.cityName}&format=json`);

      const resWeah = await axios.get(`${process.env.REACT_APP_URL}/weather`);

      this.setState({
        cityInfo: axiosReq.data[0],
        showInfo: true,
        serError: false,
        errorMessage: '',
        weatherData: resWeah.data.data
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
          this.state.showInfo &&
          <Map
            cityInfo={this.state.cityInfo}
            weatherData={this.state.weatherData}
          />
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
