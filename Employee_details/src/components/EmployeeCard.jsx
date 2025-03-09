import React from 'react'

function EmployeeCard({img, Name, Job, Department, Email}) {
  return (
    <div>
      <img src={img} alt='employee' />
        <h2>{Name}</h2>
        <p>{Job}</p>
        <p>{Department}</p>
        <p>{Email}</p>
    </div>
  )
}

export default EmployeeCard
