import React from 'react'

function Card({children,isReverse}) {
  return (
    <div className={`card ${isReverse ? 'reverse' : '' }`}>
        {children}
    </div>
  )
}

export default Card