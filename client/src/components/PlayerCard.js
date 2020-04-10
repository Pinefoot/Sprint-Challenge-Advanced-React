import React from 'react';


function PlayerCard (props){
    return(
        <div className = "playerCardstyle">
            {props.value.map(players => {
                return(
                    <div key={players.id} className = 'player-cards'>
                        <p data-testid="name">Name: {players.name}</p>
                        <p data-testid="country">Country: {players.country}</p>
                        <p data-testid="searches">Searches: {players.searches}</p>
                        </div>
                )
            })}
        </div>
    )
}

export default PlayerCard;