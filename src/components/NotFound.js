import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap"
import CardImage from "../icons/not-found.png"

class NotFound extends Component {

    render() {
        return(

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={CardImage} />
                <Card.Body>
                    <Card.Title>Page Not Found</Card.Title>
                    <Card.Text>
                        {this.props.location.state && this.props.location.state.referrer ? this.props.location.state.referrer : this.props.location.pathname}
                    </Card.Text>
                    <Link to="/">Return Home</Link>
                </Card.Body>
            </Card>

        )
    }

}

export default NotFound
