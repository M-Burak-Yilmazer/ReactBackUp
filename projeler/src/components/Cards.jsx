import React from 'react'
import Header from './Header'
import PlayerCard from './PlayerCard'


const Cards = ({data}) => {
  // console.log(data);
  return (
    <div>
      <Header />
      {data.map((player) => (
        <PlayerCard data={player} />
      ))}
    </div>
  );
}

export default Cards