import React from 'react';

class Connexion extends React.Component {


    goToChat = (e) => {
        e.preventDefault();
        // Récuperation du pseudo
        const pseudo = this.pseudoInput.value;
        // changer l'url (methode de react router)
        this.context.router.transitionTo(`/pseudo/${pseudo}`);
    }
    
    render(){
        return (
            <div className="connexionBox">
                <form className="connexion" onSubmit={e => this.goToChat(e)}>
                    <input 
                    type="text" 
                    placeholder="Pseudo" 
                    required 
                    ref={input => this.pseudoInput = input} 
                    />
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
       static contextTypes = {
        router: React.PropTypes.object
}
 
}

export default Connexion;