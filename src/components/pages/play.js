import React from 'react';
import Frame from '../games/play/frame';
import Field from '../games/play/field';

class Play extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            molesStatus: Array(9).fill("not"),
            score: 0,
            gameStatus: "start",
            remainingTime: 60,
            count : 0,
        };
    }

    addScore(add){
        //console.log(this.state.score);
        console.log(this.state.score - add);
        this.setState({
            score: this.state.score + add,
        });
        console.log("added:" + this.state.score);
    }

    render(){
        
        return(
            <div>
                {this.timeHandler}
                <Frame 
                    remainingTime={this.state.remainingTime}
                    changeEvent={(status) => this.props.changeEvent(status)}
                    sendState={(status, value) => this.props.sendState(status, value)}
                    score={this.state.score}
                />
                <Field 
                    molesStatus={this.state.molesStatus}
                    addScore={(add) => this.addScore(add)}    
                />
                <button onClick={() => this.props.changeEvent("start")}>
                        戻る
                </button>
            </div>
        )
    }
}

export default Play;