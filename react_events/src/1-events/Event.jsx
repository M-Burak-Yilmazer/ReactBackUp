import React from 'react'

const Event = () => {

    const handleTikla =()=>
        alert("tiklandi")

  return (
    <div>
    <h1>Events</h1>
    <button onClick={handleTikla}> Tikla</button>
      
    </div>
  )
}

export default Event
