import React, { Component } from 'react'
import './RoomList.css'


class RoomList extends Component {
    render () {
        let roomContent = ''
        if (this.props.rooms) {
            roomContent = this.props.rooms.map(room => {
                return <li>{room.name}</li>
            })
        }
        else {
            roomContent = ''
        }

        return (
            <div className="RoomList">
                <h2>RoomList</h2>
                <ul>
                    {roomContent}
                </ul>
            </div>
        )
    }
}

export default RoomList
