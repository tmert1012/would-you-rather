import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from "../actions/authedUser";
import { Redirect } from 'react-router-dom'

class Signin extends Component {
    state = {
        user: "",
        toHome: false,
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
            toHome: true
        }))
    }

    render() {
        const { users } = this.props

        if (this.state.toHome === true) {
            return <Redirect to='/home' />
        }

        return (
            <div className='signin'>
                <div className='welcome-message'>Welcome to the World You Rather App</div>
                <div className='instructions'>Please sign in to continue</div>
                <div className='logo'><img src="/public/react-redux.png" alt='react-redux logos'/></div>
                <div className='title'>Sign In</div>

                <form onSubmit={this.handleSubmit}>
                    <select
                        className='user-select'
                        value={this.state.user}
                        onChange={this.handleChange}>
                            <option key="" value="">Select User...</option>
                            {Object.keys(users).map( (id) => (<option key={id} value={id}>{users[id].name}</option>) )}
                    </select>

                    <button disabled={this.state.user === ""} className="btn" type="submit">Login</button>
                </form>

            </div>
        )
    }
}


function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Signin)