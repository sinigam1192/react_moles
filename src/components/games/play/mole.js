import React from 'react';
import GifPlayer from 'react-gif-player';
import moleAppeared from './../../../assets/mole/appeared.gif';
import moleWaiting from './../../../assets/mole/waiting.gif';
import moleDeath from './../../../assets/mole/death.gif';
import moleBack from './../../../assets/mole/back.gif';
import moleNot from './../../../assets/mole/not.gif';

//ステータス定義
//appared :出現するアニメーション。1ループ後に、waitingに移行する。
//waiting :3秒程度、待機状態のアニメーション。ここからdeathまたは、backに移行する。
//death   :waitingからタップ、クリックされるとなる状態。ポイントが入る。
//back    :3秒間、waiting状態を継続すると、この状態になる。時間切れで地中に潜る。
//not     :何も表示していない状態。この状態をタップすると、ポイントが減点になる。

class Mole extends React.Component{
    constructor(props){
        //もぐらのステータス
        super(props);
        var gif = this.indicateHandler(props.status);
        this.state = {
            statusTime: 0,
            alive: true,
            hit: false,
            gif: gif,
            status: props.status,
            point: 10,
            appearedTime: Math.floor( Math.random() * 5 ),
        }
    }

    //もぐらの出現時間管理
    componentDidMount(){
        this.timerID = setInterval(()=> 
          this.autoChangeStatus(), 250);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
      
    autoChangeStatus(){
        var decreaseTime = 0.25;
        this.setState({
            appearedTime: this.state.appearedTime - decreaseTime,
        });
        //自動で変換する
        if (this.state.appearedTime < 0){
            if(this.state.status == "appeared"){
                this.setChangeGif("waiting", 2, true);
            }else if(this.state.status == "waiting"){
                this.setChangeGif("back", 0, false);
            }else if(this.state.status == "back"){
                this.setChangeGif("not", Math.floor( Math.random() * 5 ), false);
            }else if(this.state.status == "not"){
                this.setChangeGif("appeared", 0, false);
            }else if(this.state.status == "death"){
                this.setChangeGif("not", Math.floor( Math.random() * 5 ), false);
            }
        }
    }


    setChangeGif(status, time, click){

        this.setState({
            gif: this.indicateHandler(status),
            status: status,
            appearedTime: time,
            alive: click,
        })
    }
    //表示するGifは？
    indicateHandler(status){
        //console.log("changeTo:"+status);
        if(status === null){
            return;
        }else if(status == 'appeared'){
            return moleAppeared;
        }else if(status == 'waiting'){
            return moleWaiting;
        }else if(status == 'back'){
            return moleBack;
        }else if(status == 'death'){
            return moleDeath;
        }else if(status == 'not'){
            return moleNot;
        }
    }

    setGif(gif, status){
        this.setState({
            gif: gif,
            status: status,
        });
    }

    clickAttack(){
        console.log("click:"+ this.state.alive);
        if (this.state.alive){
            this.props.addScore(10);  
            this.setState({
                status: "death",
                appearedTime: 0.25,
                alive: false,
            });

        }
       
    }
    showMole(status){
        const showGif = this.indicateHandler(status);
        //console.log("showGif:" + status);
        return (
            <GifPlayer
                    gif={showGif}
                    still={showGif}
                    onClick={() => this.clickAttack()}
            />
        )
    }


    render(){
        {document.ondragstart = function(){return false;}}
        return(
            <div className='moleObject'>
                {this.showMole(this.state.status)}
            </div>
        );
    }
}
export default Mole;