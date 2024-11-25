import React from 'react'
import { useParams } from 'react-router-dom'

const PersonDetail = () => {
  const {id} =useParams()
  console.log(id)
  return (
    <div className="container text-center ">
      <img className='img-thumbnail' src="" alt="" />
      <h5>Name</h5>
      <h6>Email</h6>
    </div>
  )
}

export default PersonDetail
