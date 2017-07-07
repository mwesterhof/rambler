import React, { Component } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import RoomList from './components/RoomList'
import settings from './settings'
import { api_get } from './lib/fetch'


class App extends Component {
    constructor () {
        super()
        this.state = {
            loggedIn: false,
            token: '',
            rooms: [],
            messages: [],
            errors: []
        }
        this.setToken = this.setToken.bind(this)
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        // this.clockId = setInterval(this.tick, settings.timerInterval)
        setTimeout(this.tick, 5000)
    }

    _componentWillUnmount() {
        clearInterval(this.clockId)
    }

    setToken(token) {
        this.setState({
            token: token,
            loggedIn: true
        })
    }

    tick() {
        if (this.state.loggedIn) {
            api_get(
                'room_list',
                data => {
                    this.setState({rooms: data})
                },
                error => {
                    this.setState(state => {
                        return {
                            errors: [...state.errors, error]
                        }
                    })
                },
                this.state.token
            )
        }
    }

    render() {
        var content = '';

        if (this.state.errors.length) {
            content = (
                <div className="errorContent">
                    <h1>shit</h1>
                    <ul>
                    {this.state.errors.map(error => {
                        return <li>{error.message}</li>
                    })}
                    </ul>
                </div>
            )
        }
        else {
            if (this.state.loggedIn) {
                content = (
                    <RoomList rooms={this.state.rooms} token={this.state.token} />
                )
            }
            else {
                content = (
                    <LoginForm setToken={this.setToken} settings={settings} />
                )
            }
        }

        return (
            <div className="App">
                <h2>App</h2>
                <p>token: {this.state.token}</p>
                { content }
            </div>
        )
    }
}

export default App
