import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from "react-bootstrap"


class NotFound extends Component {

    render() {
        return(

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/not-found.png" />
                <Card.Body>
                    <Card.Title>Page Not Found</Card.Title>
                    <Card.Text>
                        {this.props.location.state.referrer ? this.props.location.state.referrer : this.props.location.pathname}
                    </Card.Text>
                    <Link to="/home">Return Home</Link>
                </Card.Body>
            </Card>

        )
    }

}

export default NotFound
