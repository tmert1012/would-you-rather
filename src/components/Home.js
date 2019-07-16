import React, { Component } from 'react'
import {connect} from "react-redux"
import { Tabs, Tab } from 'react-bootstrap'
import QuestionList from './QuestionList'

class Home extends Component {

    compare(a,b) {
        let comparison = 0
        if (a.timestamp > b.timestamp)
            comparison = -1
        else if (a.timestamp < b.timestamp)
            comparison = 1
        return comparison
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
                    <QuestionList questions={unanswered.sort(this.compare)} answered={false} />
                </Tab>
                <Tab eventKey="answered" title="Answered Questions">
                    <QuestionList questions={answered.sort(this.compare)} answered={true} />
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