export function SpotifyPlayer() {
  return (
    <div className="mx-left w-full max-w-xl overflow-hidden rounded-xl">
      <iframe
        src="https://open.spotify.com/embed/track/2evTmFdNhNjHLxFHTWFm34?si=b5031ec4924f45c7"
        width="100%"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        className="shadow-lg"
      ></iframe>
    </div>
  )
}
