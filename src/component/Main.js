import React, { Component } from 'react'
import axios from 'axios';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'


export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            cityInfo: {},
            showInfo: false
        }
    };

    getNameCity = (e) => {

        this.setState({
            cityName: e.target.value
        });

    }

    getCityInfo = async (e) => {
        e.preventDefault();
        const axiosReq = await axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.7733cdd4499bcd98592de57639a159af&city=${this.state.cityName}&format=json`);

        console.log(axiosReq);
        this.setState({
            cityInfo: axiosReq.data[0],
            showInfo: true
        })

    }




    render() {
        return (
            <div>
                <Container style={{ marginTop: "50px" }} >
                    <h2>
                        City Explorer
                    </h2>
                    <Form onSubmit={this.getCityInfo}>
                        <Form.Group className="mb-3">
                            <Form.Label>City Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter City" onChange={this.getNameCity} />
                            <Form.Text className="text-muted">
                                Ask about the location of any city
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit" >
                            Explore!
                        </Button>
                    </Form>
                </Container>

                {this.state.showInfo &&
                    <Container style={{ marginTop: "50px" }}>

                        <Row >
                            {Array.from({ length: 1 }).map((_, idx) => (
                                <Col>
                                    <Card>
                                    <Card.Body>
                                            <Card.Title>{this.state.cityInfo.display_name}</Card.Title>
                                            <Card.Text>
                                                latitude : {this.state.cityInfo.lat}
                                            </Card.Text>
                                            <Card.Text>
                                                longitude : {this.state.cityInfo.lon}
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.7733cdd4499bcd98592de57639a159af&q&center=${this.state.cityInfo.lat},${this.state.cityInfo.lon}&zoom=13`} />
  
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                    </Container>
                }
            </div>
        )
    }
}

export default Main
