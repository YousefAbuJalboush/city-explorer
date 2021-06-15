import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'

export class Weather extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Alert variant="success" style={{ marginTop: "50px" }}>
                        <Alert.Heading>Description & Date</Alert.Heading>
                        {
                            this.props.weatherData.map(value => {
                                return (
                                    <p>
                                        {value.descriptionWeather}
                                        <br />
                                        {value.dateWeather}
                                    </p>
                                )
                            })
                        }
                    </Alert>
                </Row>
            </Container>
        )
    }
}

export default Weather
