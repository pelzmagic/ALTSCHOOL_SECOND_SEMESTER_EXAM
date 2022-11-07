import React from 'react'
function Bomb() {
    throw new Error('💥 CABOOM 💥')
}
    
export default function ErrorBoundary() {
  const [explode, setExplode] = React.useState(false)
  return (
    <div>
      <button onClick={() => setExplode(e => !e)}>toggle explode</button>
        {explode ? <Bomb /> : null}
    </div>
  )
}

