import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Nav, Navbar, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import {setAuthedUser} from "../actions/authedUser";


class NavBar extends Component {

    handleLogout = (e) => {
        this.props.dispatch(setAuthedUser(null))

    }

    render() {
        const { authedUser, users } = this.props
        const user = users[authedUser]

        return (
            <Navbar bg="light" variant="light">
                <Navbar.Brand>Would You Rather?</Navbar.Brand>
                <Nav className="mr-auto mainNav" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to='/add'>New Question</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={NavLink} to='/leaderboard'>Leader Board</Nav.Link>
                    </Nav.Item>
                </Nav>
                <div>
                    <span className="welcome-message">Welcome {user.name}</span>
                    <Image src={user.avatarURL} className='headerImage' roundedCircle />
                    <Link
                        className="logout-link"
                        onClick={this.handleLogout}
                        to="#"
                    >
                        Logout
                    </Link>
                </div>
            </Navbar>
        )
    }

}

function mapStateToProps({authedUser, users}) {
    return {
        authedUser,
        users
    }
}

export default connect(mapStateToProps)(NavBar)