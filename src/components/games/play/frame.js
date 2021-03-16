import React from 'react';
import Timer from './timer';

class Frame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <div className='frame'>
                <h1>制限時間</h1>
                <Timer 
                    remainingtime={this.props.remainingTime}
                    changeEvent={(status) => this.props.changeEvent(status)}
                    sendState={(status, value) => this.props.sendState(status, value)}
                />
                <h2>得点：{this.props.score}</h2>
            </div>
        )
    }
}

export default Frame;