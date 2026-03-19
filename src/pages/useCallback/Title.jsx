import React from 'react'

const Title = () => {
    console.log("I am from title.")
  return (
    <div>Learning UseCallback hook.</div>
  )
}

export default React.memo(Title)