import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            remainingtime: props.remainingtime,
            timeOut: false
        }
    }

    componentDidMount(){
        this.timerID = setInterval(()=> 
          this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
      
    tick(){
        var decreaseTime = 1;
        this.setState({
            remainingtime: this.state.remainingtime - decreaseTime,
        });
        if (this.state.remainingtime < 0){
            this.setState({
                timeOut: true,
            });
        }
    }


    calculateTimer(time){
        if(time < 0){
            this.props.changeEvent("result");
            this.props.sendState("result", time);
        }else{
            return(time);
        };
    }

    render(){
        return(
            <h2>残り:{this.calculateTimer(this.state.remainingtime)}秒</h2>
        );
    }
}

export default Timer;