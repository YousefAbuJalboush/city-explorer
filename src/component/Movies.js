import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Alert from 'react-bootstrap/Alert'

export class Movies extends Component {
    render() {
        return (
            <Container style={{ marginTop: "50px" }}>
                <Row>
                    {
                        typeof this.props.moviesData == "string" ? (
                            <Alert variant="danger" style={{ marginTop: "50px" }}>
                                <Alert.Heading>Movie search result :</Alert.Heading>
                                <p>
                                    {this.props.moviesData}
                                </p>
                            </Alert>
                        ) : (
                            this.props.moviesData.map(value => {
                                return (
                                    <Card style={{ width: '18rem' , margin: "21px" }}>
                                        <Card.Img variant="top" alt="No img for this Movie" src={value.poster_path} />
                                        <Card.Body>
                                            <Card.Title>{value.title}</Card.Title>
                                            <Card.Text>
                                                {value.overview}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem>Vote Average : {value.vote_average}</ListGroupItem>
                                            <ListGroupItem>Vote Count : {value.vote_count}</ListGroupItem>
                                            <ListGroupItem>Popularity : {value.popularity}</ListGroupItem>
                                            <ListGroupItem>Release Date : {value.release_date}</ListGroupItem>
                                        </ListGroup>
                                    </Card>
                                )
                            })
                        )
                    }
                </Row>
            </Container>
        )
    }
}

export default Movies
