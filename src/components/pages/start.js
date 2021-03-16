import React from 'react';

class Start extends React.Component{

    render(){
        return(
            <div>
                <h1>もぐらたたきゲーム</h1>
                <button
                  onClick={()=> {this.props.changeEvent('play')}}
                >始める</button>
            </div>
        )
    }
}

export default Start;