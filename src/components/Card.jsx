import React from 'react'

const Card = ({head,data}) => {
  return (
    <div style={{height:"100px",width:"150px",border:"2px solid black",
        borderRadius:"5px"
    }}>
      <h2>{head}</h2>
      <h1>{data}</h1>
    </div>
  )
}
export default Card