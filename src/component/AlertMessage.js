import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'

export class AlertMessage extends Component {
    render() {
        return (
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    <Alert variant="danger">
                        <Alert.Heading>There is some error</Alert.Heading>
                        <p>
                            Perhaps the entry field is empty or you entered a city name that does not exist.
                        </p>
                    </Alert>
                </Row>
            </Container>
        )
    }
}

export default AlertMessage
