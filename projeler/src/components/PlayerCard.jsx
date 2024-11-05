import React from 'react'

const PlayerCard = ({data}) => {
    console.log(data);
  return (
    <div>
        <img src={data.img} alt={data.name} width="100px" />
        <p>Player Name:{data.name}</p>
    </div>
  )
}

export default PlayerCard