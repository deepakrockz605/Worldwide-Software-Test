import React, { PureComponent } from 'react'
import Comments from "./Comments"
import Chats from "./Chats"

class Chatbox extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            newMesages: [],
            
        }
    }

    onHanldeMessageSend = (value) => {
        const newMesages = [...this.state.newMesages];
        newMesages.push(value);
        this.setState({
            newMesages
        })
    }

    render() {
        return (
            <div>
                <Chats searchText = { this.props.searchText } allMessages = { this.state.newMesages } />
                <Comments onHanldeMessageSend = { this.onHanldeMessageSend } />
            </div>
        )
    }
}

export default Chatbox