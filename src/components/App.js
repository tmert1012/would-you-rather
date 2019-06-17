import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import Signin from './Signin'

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Route path='/' exact component={Signin} />
                            </div>}
                    </div>
                </Fragment>
            </Router>
        )
    }

}

function mapStateToProps ({ users }) {
    return {
        loading: Object.keys(users).length === 0
    }
}

export default connect(mapStateToProps)(App)