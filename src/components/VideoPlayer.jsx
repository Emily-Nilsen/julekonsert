import { useRef } from 'react'
import { Video, CloudinaryContext, Transformation } from 'cloudinary-react'

export default function VideoPlayer({ publicId, poster }) {
  const videoRef = useRef()
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

  return (
    <CloudinaryContext cloud_name={cloudName}>
      <div className="overflow-hidden rounded-2xl">
        <Video
          playsInline
          publicId={publicId}
          width="100%"
          poster={poster}
          controls
          innerRef={videoRef}
          fluid="true"
        ></Video>
      </div>
    </CloudinaryContext>
  )
}
