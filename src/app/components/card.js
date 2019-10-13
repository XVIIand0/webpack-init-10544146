import React from 'react'

var Card = () => {
  const rm = Math.floor(Math.random()*1000)
  return (
    <div className='Card'>
      <h1>おめでとう!!!!</h1>
      <h2>あなたは {rm} 番目のゲストです!!!!</h2>
      <h2>すぐに歩かないでください、多くの良いことがあります!!</h2>
    </div>
  )
}

export default Card