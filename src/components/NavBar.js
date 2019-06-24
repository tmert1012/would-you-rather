import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class NavBar extends Component {


    render() {

        return (
            <nav className='nav'>
              <ul>
                <li>
                  <NavLink to='/home' exact activeClassName='active'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/new' activeClassName='active'>
                    New Question
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/leaderboard' activeClassName='active'>
                    Leader Board
                  </NavLink>
                </li>
              </ul>
            </nav>
        )

    }


}

export default NavBar