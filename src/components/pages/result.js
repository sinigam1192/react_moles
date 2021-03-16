import React from 'react';

class Result extends React.Component{
    render(){
        return(
        <div className='result'>
            <h1>結果発表</h1>
            <button onClick={() => this.props.changeEvent("play")}>
                もう一度！
            </button>
        </div>
        );
        
    };
}

export default Result;