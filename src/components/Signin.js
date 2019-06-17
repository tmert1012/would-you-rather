import React, { Component } from 'react'
import { connect } from 'react-redux'

class Signin extends Component {

    render() {
        const { users } = this.props

        return (
            <div className='signin'>
                <div className='welcome-message'>Welcome to the World You Rather App</div>
                <div className='instructions'>Please sign in to continue</div>
                <div className='logo'><img src="/public/react-redux.png" alt='react-redux logos'/></div>
                <div className='title'>Sign In</div>
                <select className='user-select'>
                    {Object.keys(users).map( (id) => (<option key={id}>{users[id].name}</option>) )}
                </select>
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