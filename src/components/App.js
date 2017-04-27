import React from 'react';
import Formulaire from './Formulaire';
import Message from './Message';
import base from '../base';
import HeaderBox from './HeaderBox';
// import ListColor from './LisColor';
// css
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../animation.css';

class App extends React.Component {

    state = {
        messages : {},
        colorMessage : [
            {id:1, name: 'Rosée du matin', color: '#CBA0AD'},
            {id:2, name:'marin blue', color:'rgb(43, 77, 153)'},
            {id:3, name:'pale green', color:'#aafbde'},
            {id:4, name:'vermillon', color:'#fe532e'},
            {id:5, name:'sky blue', color:'#82c4fa'},
            {id:6, name:'salmon', color:'#fb8b8b'},
        ],
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

    changeColor = (item) => {
    this.setState({
        nameColor: item
    })


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
                <HeaderBox changeColor={this.changeColor} colorMessage={this.state.colorMessage}/>
                <div className="messages" style={{background:this.state.nameColor}} ref={input => this.messages = input}>
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
                <Formulaire  addMessage={this.addMessage} pseudo={this.props.params.pseudo} length="140" />
            </div>
        )
    }
}

export default App;