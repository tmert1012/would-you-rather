import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';


class NavBar extends Component {

    render() {
        return (
            <Nav className="justify-content-center" variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/new">New Question</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/leaderboard">Leader Board</Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }
}

export default NavBar