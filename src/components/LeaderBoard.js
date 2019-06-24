import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardDeck } from "react-bootstrap"

class LeaderBoard extends Component {

    render() {
        const { users } = this.props

        const sortedUsers = Object.keys(users).map( (id) => ({
            id: id,
            avatarURL: users[id].avatarURL,
            name: users[id].name,
            answeredCnt: Object.keys(users[id].answers).length,
            questionCnt: users[id].questions.length,
            score: Object.keys(users[id].answers).length + users[id].questions.length
        })).sort((a,b) => {return b.score - a.score})

        return (
            <CardDeck>
                {sortedUsers.map((user) => (
                    <Card key={user.id} bg="light" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{user.name}</Card.Title>
                            <Card.Body>
                                <img src={user.avatarURL} />
                                <div>Answered Questions: {user.answeredCnt}</div>
                                <div>Created Questions: {user.questionCnt}</div>
                                <div>
                                    Score: {user.score}
                                </div>
                            </Card.Body>
                        </Card.Body>
                    </Card>
                ))}
            </CardDeck>
        )
    }

}

function mapStateToProps({ users }) {
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)