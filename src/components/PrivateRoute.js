import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


class PrivateRoute extends Component {

    render() {
        const { component: Component, ...rest } = this.props

        return (
          <Route {...rest} render={(props) => (
            this.props.authedUser === null
                ? <Redirect to={{
                    pathname: '/login',
                    state: {
                        from: props.location
                    }
                }} />
                : <Component {...props} />
          )} />
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(PrivateRoute)