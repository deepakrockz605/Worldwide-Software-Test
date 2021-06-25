import React, { PureComponent } from 'react'
import Icon from './Icon'
import "../CSS/Chats.css"

class Chats extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.props.allMessages.length ?
                        <React.Fragment>
                        {
                            this.props.allMessages.map((message, index) => {
                                return (
                                <div className="chatwrapper" key={index}>
                                    <div className="chatDate">
                                        <span>Saturday, 22 June</span>
                                    </div>
                                    <div className="chats">
                                        <Icon cssClassName="fa fa-user chatUser" />
                                        <div className="userMessages">
                                            <label>Deepak Pawar</label>
                                            <p>{message}</p>
                                        </div>
                                    </div>
                                </div> 
                                )
                            })
                        }
                        </React.Fragment>: null
                }
            </React.Fragment>
        )
    }
}

export default Chats