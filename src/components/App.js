import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../base';
// css
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';

class App extends React.Component {

    state = {
        messages : {}
    }

    // Synchroniser avec la base de donnée
    componentWillMount() {
        this.ref = base.syncState('/messages', {
            context: this,
            state: 'messages'
        });
    }

    componentDidUpdate() {
        // mettre le scrool en bas quand le texte se remplit
        this.messages.scrollTop = this.messages.scrollHeight;
    }

    addMessage = (message) => {
        // Copier le state
        const messages = {...this.state.messages};
        // on ajoute le message avec une clé timestamp
        const timestamp = Date.now();
        messages[`message-${timestamp}`] = message;
        // On supprime si plus de 10 messages
        Object.keys(messages).slice(0, -20).map(key => messages[key] = null);

        // mettre à jour notre state
        this.setState({ messages : messages });
    }

    isUser = (pseudo) => {
        return pseudo === this.props.params.pseudo;
    }

    render(){

        const messages = Object
        .keys(this.state.messages)
        .map(key => <Message key={key} details={this.state.messages[key]} 
        isUser={this.isUser} />)
        ;

        console.log(messages)

        return (
            <div className="box">
                <div className="messages" ref={input => this.messages = input}>
                    <ReactCSSTransitionGroup 
                    component="div"
                    className="message"
                    transitionName="message"
                    transitionEnterTimeout={200}
                    transitionLeaveTimeout={200}
                    >
                    {messages}
                    </ReactCSSTransitionGroup>
                </div>
                <Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length="140" />
            </div>
        )
    }
}

export default App;