import React, { Component } from 'react'

export default class ChatRoom extends Component {

state = {
    message: '',
    messages: []
}

componentDidMount = () => {
    firebase.database().ref('messages/').on('value', (snapshot) => {
        const currentMessages = snapshot.val()

        if(currentMessages != null){
            this.setState({
                messages: currentMessages
            })
        }
    })
}

handleChange = (e) => {
    this.setState({
       [e.target.name]: e.target.value
    })
}
handleSubmit = () => {
    const nextMessage = {
        id: this.state.messages.length,
        text: this.state.message
    }

    firebase.database().ref('messages/')+nextMessage.id).set(nextMessage)
    // let list = Object.assign([], this.state.messages);
    // list.push(nextMessage)
    // this.setState({
    //     messages: list
    // })
}
    render() {
        //loops through state
        const currentMessage = this.state.messages.map(message => {
            return(
                <li key={message.id}> {message.text} </li>
            )
        })
        return (
            <div>
                <ol>
                    <li>{currentMessage}</li>
                </ol>
                <input type = "text" placeholder="Message"  onChange = {this.handleChange} value = {this.state.message} name = 'message'/>
                <br /> 
                <button onClick = {this.handleSubmit}>Submit Message</button>
            </div>
        )
    }
}
