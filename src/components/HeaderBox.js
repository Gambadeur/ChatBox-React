import React from 'react';
import ListColor from './ListColor';

class HeaderBox extends React.Component {

    constructor (props) {
        super(props);
        // this.change = this.change.bind(this);
        this.state = {
            listColorStyle: {display: 'none'}
        }
    }

// MENU CUSTOMIZER

    menuClosed = () => {
        this.setState({
            listColorStyle: {display: 'none'}
        })
    }

    menuOpen = () => {
        
         this.setState({
           listColorStyle: {display: 'block'}
        })

    }


        // change() {
        //     this.props.changeColor()
        //     console.log("hello")
        // }

    render() {
        console.log(this.props.changeColor)
        return (
            <div className="headerBox">
                <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                <div className="divColor"> 
                    <h4 onClick={(e) => this.menuOpen()}>Customizer</h4>
                    
                        <ul className="listColor" style={this.state.listColorStyle} >
                            <i className="fa fa-times" onClick={(e) => this.menuClosed()} aria-hidden="true"></i>
                            <ListColor changeColor={this.props.changeColor} colorMessage={this.props.colorMessage} />

                        </ul>
                    
                </div>
                <h2> Canal de communication P7 </h2>
            </div>
        )
    }

}

export default HeaderBox