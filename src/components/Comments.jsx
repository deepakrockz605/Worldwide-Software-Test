import React, { PureComponent } from 'react'

class Comments extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            message: "",
        }
    }

    onHandleMessageChange = (e) => {
        this.setState({
            message: e.target.value,
        })
    }

    onHanldeMessageSend = (e) => {
        e.preventDefault();
        this.props.onHanldeMessageSend(this.state.message);
        this.setState({ message: "" })
    }

    render() {
        return (
         <div>
             <textarea name="comment" rows="4" cols="50" onChange = { this.onHandleMessageChange} value = {this.state.message} />
             <button onClick = {this.onHanldeMessageSend}>Send</button>
         </div>   
        )
    }
}

export default Comments