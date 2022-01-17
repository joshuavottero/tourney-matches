import React from "react";

function Player(props) {
  const { gamerTag, firstName, lastName, wins } = props
  return (
    <article className="Player">
      <h1>
        {firstName} <span>{gamerTag}</span> {lastName}
      </h1>
      {/* To be shown when there is no wins*/}
      {(wins === 0) && <h2 className="zero">Currently with no wins :(</h2>} 
      
       {/* To be shown when there is one win */}
      {(wins === 1) && <h2>Currently at 1 wins</h2>}
      
      {/* To be shown when there is more then one win */}
      {(wins > 1) && <h2>Currently at {wins}+ wins</h2>}  
     
    </article>
  );
}

export default Player;