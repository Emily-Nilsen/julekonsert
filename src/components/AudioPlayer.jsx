import React, { useRef } from 'react'

function AudioPlayer({ src }) {
  const audioRef = useRef(null)

  // Play the audio when the component mounts
  React.useEffect(() => {
    audioRef.current.play()
  }, [])

  return <audio ref={audioRef} autoPlay src={src} />
}

export default AudioPlayer
