import React from 'react';
import Mole from './mole';

class Field extends React.Component{
    constructor(props){
        super(props);
    }

    renderMole(i){
        return(
            <Mole 
                status={this.props.molesStatus[i]}
                addScore={(add) => this.props.addScore(add)}
            />
        )
    }
    render(){
        return(
            <div className='moles'>
                <div className='mole-row'>
                    {this.renderMole(0)}
                    {this.renderMole(1)}
                    {this.renderMole(2)}
                </div>
                <div className='mole-row'>
                    {this.renderMole(3)}
                    {this.renderMole(4)}
                    {this.renderMole(5)}
                </div>
                <div className='mole-row'>
                    {this.renderMole(6)}
                    {this.renderMole(7)}
                    {this.renderMole(8)}
                </div>    
            </div>
        )   
    }
}
export default Field;
