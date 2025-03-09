import React from 'react'

function EventCard({Event_Name,Event_Date,Location,Short_discription}) {
  return (
    <div>
        <h2>{Event_Name}</h2>
        <p>{Event_Date}</p>
        <p>{Location}</p>
        <p>{Short_discription}</p>

      
    </div>
  )
}

export default EventCard
