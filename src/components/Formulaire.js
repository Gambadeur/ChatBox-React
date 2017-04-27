import React from 'react';

class Formulaire extends React.Component {

    state = {
        length : this.props.length
    }

    createMessage = e => {
        e.preventDefault();
        console.log(this.message.value);
        const message = {
            message: this.message.value,
            pseudo: this.props.pseudo
        };

        this.props.addMessage(message);

        // Reset
        this.messageForm.reset();
        const length = this.props.length;
        this.setState({length : length})
    }

    compteur = e => {
        const length = this.props.length - this.message.value.length;
        console.log(length)
        this.setState({length});
    }

    render(){
        return (
            
                <form className="form" 
                onSubmit={(e) => this.createMessage(e)}
                ref={input => this.messageForm = input}
                >

                    <textarea 
                    required 
                    maxLength={this.props.length}
                    ref={(input) => this.message = input}
                    onChange={e => this.compteur(e)}
                    >
                    </textarea>

                    

                    <button type="submit" onEnter="">
                        <i className="fa fa-paper-plane" aria-hidden="true"></i>

                        Envoyer!</button>

                    {/*<div className="info">
                        {this.state.length}
                    </div>*/}
                </form>
            
        )
    }
}

export default Formulaire;