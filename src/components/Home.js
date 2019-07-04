import React, { Component } from 'react'
import {connect} from "react-redux"
import { Tabs, Tab } from 'react-bootstrap'
import QuestionList from './QuestionList'
import {handleInitialQuestions} from "../actions/questions";

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(handleInitialQuestions())
    }

    render() {
        const { authedUser, questions } = this.props

        const unanswered = []
        const answered = []

        Object.keys(questions).forEach( (id) => {
            if (questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser))
                answered.push(questions[id])
            else
                unanswered.push(questions[id])
        })

        return (
            <Tabs defaultActiveKey="unanswered">
                <Tab eventKey="unanswered" title="Unanswered Questions">
                    <QuestionList questions={unanswered} answered={false} />
                </Tab>
                <Tab eventKey="answered" title="Answered Questions">
                    <QuestionList questions={answered} answered={true} />
                </Tab>
            </Tabs>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(Home)