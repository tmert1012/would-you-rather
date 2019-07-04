import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Signin from './Signin'
import NavBar from './NavBar'
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import {handleInitialUsers} from "../actions/users";
import Question from "./Question";

class App extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialUsers())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div className='container'>
                        { this.props.loading === true
                            ? null
                            :
                            <div>
                                {this.props.authedUser === null ? null : <NavBar />}
                                <Route path='/' exact component={Signin} />
                                <Route path='/home' exact component={Home} />
                                <Route path='/new' exact component={NewQuestion} />
                                <Route path='/leaderboard' exact component={LeaderBoard} />
                                <Route path="/questions/:id" component={Question}/>
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }

}

function mapStateToProps ({ users, authedUser }) {
    return {
        loading: Object.keys(users).length === 0,
        authedUser,
    }
}

export default connect(mapStateToProps)(App)