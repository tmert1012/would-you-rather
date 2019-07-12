import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from "../actions/authedUser";
import { Redirect } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

class Signin extends Component {
    state = {
        user: "",
        redirectToReferrer: false
    }

    handleChange = (e) => {
        const user = e.target.value

        this.setState(() => ({
            user
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.dispatch(setAuthedUser(this.state.user))

        this.setState(() => ({
            redirectToReferrer: true
        }))
    }

    render() {
        const { users } = this.props
        const { redirectToReferrer } = this.state
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (redirectToReferrer === true) {
            return <Redirect to={from} />
        }

        return (
            <Card style={{ width: '18rem' }} className="text-center mx-auto" bg="light">
                <Card.Img variant="top" src="react-redux.png" />
                <Card.Body>
                    <Card.Title>Would You Rather?</Card.Title>
                    <Card.Text>
                        Please sign in to continue
                    </Card.Text>
                    <form onSubmit={this.handleSubmit}>
                        <select
                            className='user-select'
                            value={this.state.user}
                            onChange={this.handleChange}>
                                <option key="" value="">Select User...</option>
                                {Object.keys(users).map( (id) => (<option key={id} value={id}>{users[id].name}</option>) )}
                        </select>
                        <br />
                        <Button variant="primary" disabled={this.state.user === ""} className="btn" type="submit">Login</Button>
                    </form>
                </Card.Body>
            </Card>
        )
    }
}


function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Signin)