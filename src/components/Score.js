import React from 'react';

const Score = (props) => {
    return (
        <div className="scorePlayerName" >
            {props.result}
        </div>);
}

export default Score;