import React, { Component } from 'react'

import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export class Movie extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' , margin: "21px" }}>
            <Card.Img variant="top" alt="No img for this Movie" src={this.props.poster_path} />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                    {this.props.overview}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Vote Average : {this.props.vote_average}</ListGroupItem>
                <ListGroupItem>Vote Count : {this.props.vote_count}</ListGroupItem>
                <ListGroupItem>Popularity : {this.props.popularity}</ListGroupItem>
                <ListGroupItem>Release Date : {this.props.release_date}</ListGroupItem>
            </ListGroup>
        </Card>
        )
    }
}

export default Movie
