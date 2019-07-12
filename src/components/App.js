import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Signin from './Signin'
import NavBar from './NavBar'
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import {handleInitialUsers} from "../actions/users";
import Question from "./Question";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

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
                                <Switch>
                                    <Route path='/login' exact component={Signin} />
                                    <PrivateRoute path='/' exact component={Home} />
                                    <PrivateRoute path='/add' exact component={NewQuestion} />
                                    <PrivateRoute path='/leaderboard' exact component={LeaderBoard} />
                                    <PrivateRoute path="/questions/:id" component={Question}/>
                                    <Route path="/not-found" component={NotFound}/>
                                    <Route component={NotFound}/>
                                </Switch>
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