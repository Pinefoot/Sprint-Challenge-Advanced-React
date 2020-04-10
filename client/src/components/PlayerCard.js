import React from 'react';


function PlayerCard (props){
    return(
        <div className = "playerCardstyle">
            {props.value.map(players => {
                return(
                    <div key={players.id} className = 'player-cards'>
                        <p>Name: {players.name}</p>
                        <p>Country: {players.country}</p>
                        <p>Searches: {players.searches}</p>
                        </div>
                )
            })}
        </div>
    )
}

export default PlayerCard;