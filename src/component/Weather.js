import React, { Component } from 'react'

import WeatherDay from './WeatherDay';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


export class Weather extends Component {
    render() {
        return (
            <Container className="Weather">
                <h2 style={{ marginTop: "50px" }} >weather : </h2>
                <Row>

                        {
                            this.props.weatherData.map(value => {
                                return (

                                    <WeatherDay
                                        descriptionWeather={value.descriptionWeather}
                                        dateWeather={value.dateWeather}
                                    />
                                )
                            })
                        }
                </Row>
            </Container>
        )
    }
}

export default Weather
