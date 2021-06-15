import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export class Map extends Component {
    render() {
        return (
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    {Array.from({ length: 1 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{this.props.cityInfo.display_name}</Card.Title>
                                    <Card.Text>
                                        latitude : {this.props.cityInfo.lat}
                                    </Card.Text>
                                    <Card.Text>
                                        longitude : {this.props.cityInfo.lon}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Img variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=pk.7733cdd4499bcd98592de57639a159af&q&center=${this.props.cityInfo.lat},${this.props.cityInfo.lon}&zoom=13`} />

                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default Map
