import React from 'react';
import Play from './pages/play';
import Start from './pages/start';
import Result from './pages/result';

//ゲームステータス
//start  :タイトル画面。
//play   :ゲームプレイ中
//result :結果発表

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            event: "start",
            value: null,
        }
    }

    changeEvent(status){
        this.setState({
            event: status
        });
    }

    sendState(status, value){
        this.setState({
            value: value,
        })
    }

    
    //画面遷移
    eventHandler(event) {
        if(event === "start"){
                return( <Start 
                    changeEvent={argEvent => this.changeEvent(argEvent)}
                />
            );
        }else if (event === "play"){
            return( 
                <Play
                    changeEvent={argEvent => this.changeEvent(argEvent)}
                    // sendState={}
                />
            );
        }else if(event === "result"){
            return( 
                <Result
                    changeEvent={argEvent => this.changeEvent(argEvent)}        
                    // point = 
                />
            );
        };
    }

    render(){
        return(
            <div className='game'>
                {this.eventHandler(this.state.event)}
            </div>
        );
    }
}

export default Game;


